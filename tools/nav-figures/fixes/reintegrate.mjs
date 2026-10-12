/* Swaps the audited figures' rebuilt SVG, controllers and CSS into the page in place (12 Oct audit fixes).
   FIG_TARGET=<file> to point it elsewhere; refuses to run twice. */
import { readFileSync, writeFileSync } from "node:fs";
import * as LF from "../nav2/life.mjs";
import * as DR from "../nav3/dir.mjs";
import * as CT from "../nav3/contact.mjs";
import * as GD from "../nav3/gold.mjs";
import * as SX from "../nav3/startx.mjs";
import * as NS from "../nav4/nsat.mjs";
import * as CN from "../nav4/cnsat.mjs";
import * as MC from "../fdr/mics.mjs";
const FILE = process.env.FIG_TARGET || "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
const MARK = "/* figure fixes from the 12 Oct audit */";
if (s.includes(MARK)) throw new Error("the audit fixes are already in this page");
const once = (needle, what) => { const n = s.split(needle).length - 1; if (n !== 1) throw new Error(`${what}: expected one "${needle.slice(0, 70)}", found ${n}`); return s.indexOf(needle); };
const FIGS = [["life", LF, "mountLife"], ["dir", DR, "mountDirectory"], ["contact", CT, "mountContact"], ["gold", GD, "mountGold"], ["startx", SX, "mountStartX"], ["nsat", NS, "mountNsat"], ["cnsat", CN, "mountCodingNsat"]];
for (const [key, M, fn] of FIGS) {
  /* 1 · the SVG inside the figure's .dn-svg */
  const at = once(`dn-fig iso dn-iso" data-theme="light" data-fig="${key}"`, `figure ${key}`);
  const open = '<div class="dn-svg">', a = s.indexOf(open, at);
  if (a < 0 || a - at > 400) throw new Error(`figure ${key}: .dn-svg not found`);
  const b = s.indexOf("</div>", a);
  s = s.slice(0, a + open.length) + M.SVG + s.slice(b);
  /* 2 · its controller, up to the next controller or the figure map */
  const f0 = once(`function ${fn}(root){`, `controller ${fn}`);
  const nx = [s.indexOf("function mount", f0 + 10), s.indexOf("const figs = {}", f0)].filter((i) => i > 0);
  const f1 = Math.min(...nx);
  if (!isFinite(f1)) throw new Error(`controller ${fn}: end not found`);
  s = s.slice(0, f0) + M.LIVE.trim().replace("function mount(root)", `function ${fn}(root)`) + "\n" + s.slice(f1);
}
/* 3 · founders mics: both SVGs, and their CSS block */
for (const [side, svg] of [["l", MC.SVG_L], ["r", MC.SVG_R]]) {
  const open = `<div class="fdr-mic fdr-mic-${side} iso fdr-iso" data-theme="dark" aria-hidden="true">`, a = once(open, `mic ${side}`);
  const b = s.indexOf("</div>", a + open.length);
  s = s.slice(0, a + open.length) + svg + s.slice(b);
}
const C0 = ".iso.fdr-iso,.iso.fdr-iso[data-theme]{", C1 = "@media (prefers-reduced-motion:reduce){ .fdr-mic.is-talk .mc-arc{animation:none;opacity:.3} }";
const c0 = once(C0, "mic CSS start"), c1 = s.indexOf(C1, c0);
if (c1 < 0) throw new Error("mic CSS end not found");
s = s.slice(0, c0) + MC.CSS.trim() + s.slice(c1 + C1.length);
/* 4 · the rebuilt figure CSS, last in the head's style block so it wins over the earlier copies */
const END = "</style>\n</head>", e = once(END, "head style end");
s = s.slice(0, e) + MARK + "\n" + FIGS.map(([, M]) => M.CSS.trim()).join("\n") + "\n" + s.slice(e);
writeFileSync(FILE, s);
console.log("reintegrated", FIGS.length, "figures + mics into", FILE, s.length);
