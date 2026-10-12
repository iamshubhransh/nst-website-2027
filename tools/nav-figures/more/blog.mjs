/* Blogs: a laptop open on the desk; on its screen a post (cover image, title, lines) scrolls slowly past, one after another. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, planeMatrix, base } from "./common.mjs";
const FLOOR = { x: -46, y: -34, w: 92, d: 68, r: 8 };
const LB = { x: -32, y: -12, w: 64, d: 40, r: 2.4 }, LH = 2.6;          /* the base; the hinge runs along its back edge y = -12 */
const TILT = 14 * Math.PI / 180, SW = 64, SH = 42;                   /* the lid leans back 14° */
const at = (u, v) => [LB.x + u, LB.y - v * Math.sin(TILT), LH + v * Math.cos(TILT)];
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), at(0, SH), at(SW, SH)], W, H, { pad: 26, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
function laptop() {
  const out = [S(k.slabOf(LB, 0, LH, P, 4, 0.5), { tone: "mid" })];
  /* keyboard: rows of key outlines on the deck, and the trackpad */
  const keys = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 12; c++) keys.push(k.planOutline({ x: LB.x + 5 + c * 4.6, y: LB.y + 4 + r * 4.4, w: 3.6, d: 3.4, r: 0.6 }, LH, P, 2));
  out.push(L(keys.join(""), { tone: "lo" }));
  out.push(L(k.planOutline({ x: -9, y: LB.y + 24, w: 18, d: 11, r: 1.4 }, LH, P, 3), { tone: "lo" }));
  /* the lid: a thin panel from the hinge, its bezel and the screen */
  const back = [at(0, 0), at(SW, 0), at(SW, SH), at(0, SH)].map((p) => [p[0], p[1] - 1.4 * Math.cos(TILT), p[2] - 1.4 * Math.sin(TILT)]);
  const front = [at(0, 0), at(SW, 0), at(SW, SH), at(0, SH)];
  out.push(`<path class="bl-lid" d="${k.pathOf([...back.slice(0, 2), ...front.slice(1, 3).reverse(), ...[]].map((p) => k.iso(p, P)), true)}"/>`);
  out.push(`<path class="bl-lid" d="${k.pathOf([back[1], back[2], front[2], front[1]].map((p) => k.iso(p, P)), true)}"/>`);
  out.push(`<path class="bl-lid" d="${k.pathOf([back[3], back[2], front[2], front[3]].map((p) => k.iso(p, P)), true)}"/>`);
  out.push(`<path class="bl-face" d="${k.pathOf(front.map((p) => k.iso(p, P)), true)}"/>`);
  const m = planeMatrix(at(0, SH), [1, 0, 0], [0, Math.sin(TILT), -Math.cos(TILT)], P);
  /* in screen space (u right, v down from the lid's top): the display, and the post that scrolls in it */
  const post = (y) => `<g transform="translate(0 ${y})"><rect class="bl-cover" x="10" y="0" width="${SW - 20}" height="13" rx="1.2"/><path class="bl-title" d="M10 17.6h30M10 21h22"/><path class="bl-text" d="M10 25.4h44M10 28.2h40M10 31h42M10 33.8h30"/><path class="bl-chip" d="M10 37.4h9"/></g>`;
  out.push(`<g transform="${m}"><rect class="bl-screen" x="3" y="3" width="${SW - 6}" height="${SH - 6}" rx="1"/><clipPath id="bl-clip" clipPathUnits="userSpaceOnUse"><rect x="3" y="3" width="${SW - 6}" height="${SH - 6}" rx="1"/></clipPath>` +
    `<g clip-path="url(#bl-clip)"><g class="bl-scroll">${post(6)}${post(48)}${post(90)}</g></g><rect class="bl-bezel" x="3" y="3" width="${SW - 6}" height="${SH - 6}" rx="1"/><circle class="bl-cam" cx="${SW / 2}" cy="1.5" r=".55"/></g>`);
  return out.join("");
}
const svg = k.figureSvg({ width: W, height: H, label: "A laptop open on a desk; a blog post scrolls slowly past on its screen.", body: [base(FLOOR, 4, P), laptop()] });
export const CSS = `
.bl-lid{fill:var(--anatomy-shade-1);stroke:var(--anatomy-mid);stroke-width:.6;stroke-linejoin:round}
.bl-face{fill:var(--anatomy-shade-2);stroke:var(--anatomy-mid);stroke-width:.6;stroke-linejoin:round}
.bl-screen{fill:#fff}
.bl-bezel{fill:none;stroke:var(--anatomy-lo);stroke-width:.4;vector-effect:non-scaling-stroke}
.bl-cover{fill:var(--anatomy-lit);opacity:.85}
.bl-title{fill:none;stroke:var(--anatomy-hi);stroke-width:1.3;stroke-linecap:round}
.bl-text{fill:none;stroke:var(--anatomy-lo);stroke-width:.8;stroke-linecap:round}
.bl-chip{fill:none;stroke:var(--anatomy-lit);stroke-width:2.2;stroke-linecap:round;opacity:.5}
.bl-cam{fill:var(--anatomy-mid)}
`;
export const LIVE = `
function mount(root){
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const scroll = root.querySelector(".bl-scroll");
  let live = false, frame = 0, t = 0, last = 0;
  function draw(){
    /* one post every 3.6 s: hold, then glide up by one post (42 units) */
    const c = t % 3.6, u = c < 2.4 ? 0 : (c - 2.4) / 1.2, e = u * u * (3 - 2 * u), n = Math.floor(t / 3.6) % 2;
    scroll.setAttribute("transform", "translate(0 " + (-(n + e) * 42).toFixed(2) + ")");
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("blog.mjs")) { writeFileSync(new URL("./blog.html", import.meta.url), previewPage({ key: "blog", title: "Blogs", svg, cap: "Blogs", sub: "Stories, guides and updates", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
