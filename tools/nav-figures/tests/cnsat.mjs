/* Coding NSAT: a monitor and keyboard. In the editor a short solution types itself in, line by line; when it is done the tests run
   and a "passed" bar lights. Then the editor clears and the next problem begins. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, planeMatrix, base } from "./common.mjs";
const FLOOR = { x: -50, y: -34, w: 100, d: 68, r: 8 };
const PANEL = { x: -36, y: -22, w: 72, d: 3, r: 1.2 }, PZ = 22, PH = 44, FACE = PANEL.y + PANEL.d;
const KB = { x: -30, y: 4, w: 60, d: 18, r: 2 }, KH = 2.2;
const MOUSE = [39, 12];
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), ...k.boxCorners(PANEL, PZ, PZ + PH)], W, H, { pad: 22, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
/* the code, as segments per line: [indent, [[len, kind]...]]; kind k = keyword (the accent), n = name, s = symbol */
const CODE = [[0, [[6, "k"], [10, "n"], [5, "s"]]], [3, [[5, "k"], [8, "n"], [3, "s"], [6, "n"]]], [6, [[4, "k"], [12, "n"]]], [6, [[9, "n"], [4, "s"], [7, "n"]]], [3, [[6, "k"], [6, "n"]]], [0, [[3, "s"]]], [0, [[10, "n"], [4, "s"], [8, "n"]]]];
function monitor() {
  const out = [];
  out.push(S(k.slabOf({ x: -12, y: -28, w: 24, d: 14, r: 3 }, 0, 1.8, P, 4, 0.4), { tone: "mid" }));
  out.push(S(k.cylinder(0, -21, 2, 1.8, PZ - 1.8 + 6, P, 18), { tone: "mid", crease: "none" }));
  out.push(S(k.slabOf(PANEL, PZ, PH, P, 3, 0.5), { tone: "mid" }));
  /* the editor, in the panel's front plane (u right, v down from its top-left) */
  const m = planeMatrix([PANEL.x, FACE + 0.02, PZ + PH], [1, 0, 0], [0, 0, -1], P);
  let lines = "";
  CODE.forEach(([ind, segs], i) => {
    let x = 12 + ind; const y = 9.5 + i * 4;
    const parts = segs.map(([len, kind]) => { const d = `<path class="cn-${kind}" d="M${x} ${y}h${len - 1}"/>`; x += len + 0.6; return d; }).join("");
    lines += `<g class="cn-line" data-l="${i}"><text class="cn-num" x="8.6" y="${y + 0.9}">${i + 1}</text>${parts}</g>`;
  });
  out.push(`<g transform="${m}"><rect class="cn-screen" x="2.4" y="2.4" width="${PANEL.w - 4.8}" height="${PH - 4.8}" rx="1"/>` +
    `<rect class="cn-bar" x="2.4" y="2.4" width="${PANEL.w - 4.8}" height="3.6"/><circle class="cn-dot" cx="5.2" cy="4.2" r=".7"/><circle class="cn-dot" cx="7.4" cy="4.2" r=".7"/><circle class="cn-dot" cx="9.6" cy="4.2" r=".7"/>` +
    `<path class="cn-gutter" d="M10.6 6v${PH - 8.4}"/>${lines}<rect class="cn-caret" x="12" y="7.6" width=".7" height="3.6"/>` +
    `<g class="cn-pass"><rect x="12" y="${PH - 10}" width="30" height="5" rx="2.5"/><path d="M14.4 ${PH - 7.6}l1.1 1.1 2-2.2"/><path class="cn-pass-t" d="M19.6 ${PH - 7.5}h18"/></g>` +
    `<rect class="cn-bezel" x="2.4" y="2.4" width="${PANEL.w - 4.8}" height="${PH - 4.8}" rx="1"/></g>`);
  return out.join("");
}
function desk() {
  const out = [S(k.slabOf(KB, 0, KH, P, 3, 0.4), { tone: "mid" })];
  const keys = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 12; c++) keys.push(k.planOutline({ x: KB.x + 3 + c * 4.6, y: KB.y + 2.6 + r * 4.2, w: 3.6, d: 3.2, r: 0.6 }, KH, P, 2));
  keys.push(k.planOutline({ x: KB.x + 12, y: KB.y + 15.2 - 0.6, w: 34, d: 2.4, r: 0.6 }, KH, P, 2));
  out.push(L(keys.join(""), { tone: "lo" }));
  out.push(S(k.slabOf({ x: MOUSE[0] - 3.2, y: MOUSE[1] - 4.6, w: 6.4, d: 9.2, r: 3.1 }, 0, 2.2, P, 6, 0.4), { tone: "mid" }));
  out.push(L(k.lineOnTop([MOUSE[0], MOUSE[1] - 4.6], [MOUSE[0], MOUSE[1] - 1], 2.2, P), { tone: "lo" }));
  return out.join("");
}
const svg = k.figureSvg({ width: W, height: H, label: "Coding NSAT: a monitor and keyboard; a short solution types itself into the editor and the tests pass.",
  body: [base(FLOOR, 4, P), monitor(), desk()] });
export const CSS = `
.cn-screen{fill:#fff}
.cn-bar{fill:var(--anatomy-shade-3)}
.cn-dot{fill:var(--anatomy-lo)}
.cn-bezel{fill:none;stroke:var(--anatomy-lo);stroke-width:.4;vector-effect:non-scaling-stroke}
.cn-gutter{fill:none;stroke:var(--anatomy-shade-1);stroke-width:.4}
.cn-num{font-family:ui-monospace,Menlo,monospace;font-size:2.4px;fill:var(--anatomy-lo);text-anchor:end}
.cn-k,.cn-n,.cn-s{fill:none;stroke-width:1.15;stroke-linecap:round}
.cn-k{stroke:var(--anatomy-lit)}
.cn-n{stroke:var(--anatomy-hi)}
.cn-s{stroke:var(--anatomy-lo)}
.cn-line{opacity:0;transition:opacity .2s ease}
.cn-line.is-on{opacity:1}
.cn-caret{fill:var(--anatomy-lit)}
.cn-pass{opacity:0;transform:translateY(2px);transition:opacity .35s ease,transform .45s cubic-bezier(.22,1,.36,1)}
.cn-pass.is-on{opacity:1;transform:none}
.cn-pass rect{fill:var(--anatomy-lit)}
.cn-pass path{fill:none;stroke:#fff;stroke-width:.8;stroke-linecap:round;stroke-linejoin:round}
.cn-pass .cn-pass-t{stroke-opacity:.85}
`;
export const LIVE = `
function mount(root){
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const lines = [...root.querySelectorAll(".cn-line")], caret = root.querySelector(".cn-caret"), pass = root.querySelector(".cn-pass");
  const ENDS = ${JSON.stringify(CODE.map(([ind, segs]) => 12 + ind + segs.reduce((a, [l]) => a + l + 0.6, 0)))};
  const PER = 0.42, TYPE = lines.length * PER, CYCLE = TYPE + 2.6;
  let live = false, frame = 0, t = 0, last = 0;
  function draw(){
    const c = t % CYCLE, n = Math.min(lines.length, Math.floor(c / PER) + 1), clear = c > CYCLE - 0.35;
    lines.forEach((l, i) => l.classList.toggle("is-on", i < n && !clear));
    const i = Math.min(lines.length - 1, n - 1);
    caret.setAttribute("x", (ENDS[i] + 0.4).toFixed(2)); caret.setAttribute("y", (7.6 + i * 4).toFixed(2));
    caret.style.opacity = c > TYPE ? 0 : (Math.floor(t * 2.4) % 2 ? .25 : 1);
    pass.classList.toggle("is-on", c > TYPE + 0.5 && !clear);
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  t = 0.9; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("cnsat.mjs")) { writeFileSync(new URL("./cnsat.html", import.meta.url), previewPage({ key: "cnsat", title: "Coding NSAT", svg, cap: "Coding NSAT", sub: "For students who already code", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
