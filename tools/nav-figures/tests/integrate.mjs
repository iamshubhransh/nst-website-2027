/* Adds the two Entrance Tests figures (NSAT blue, Coding NSAT purple) to #dnTests, gives that pane a 340 px minimum height so the figures
   have room, and puts a "Register for NSAT" link at the foot of its option list. Run once. */
import { readFileSync, writeFileSync } from "node:fs";
import { tokens, THEMES, H } from "./common.mjs";
import * as NS from "./nsat.mjs";
import * as CN from "./cnsat.mjs";
const FILE = process.env.FIG_TARGET || "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
const rep = (a, b) => { const n = s.split(a).length - 1; if (n !== 1) throw new Error("count " + n + " for " + a.slice(0, 80)); s = s.replace(a, b); };
if (s.includes('data-fig="nsat"')) throw new Error("the Entrance Tests figures are already in the page");
const FIGS = [["pencil", "nsat", NS, "mountNsat", "NSAT", "Maths, English and aptitude, online"], ["code", "cnsat", CN, "mountCodingNsat", "Coding NSAT", "For students who already code"]];
const ANCHOR = ".dn-fig .dn-svg svg{display:block;width:100%;height:100%}";
rep(ANCHOR, ANCHOR + `
/* Entrance Tests: NSAT blue, Coding NSAT purple; the pane gets room for a figure (two options alone made it 150 px tall) */
${FIGS.map(([, key, M]) => tokens(key) + M.CSS).join("")}
#dnTests .dn-ill{min-height:340px}
#dnTests .dn-fig .dn-svg{height:${H}px}
#dnTests .dn-foot{margin-top:auto}`);
const fig = ([k, key, M, , cap, sub]) => `<div class="dn-art dn-fig iso dn-iso" data-theme="light" data-fig="${key}" data-k="${k}" data-acc="${THEMES[key].pane}" data-ink="${THEMES[key].ink}"><div class="dn-svg">${M.SVG}</div><span class="dn-cap"><b>${cap}</b><span>${sub}</span></span><span class="dn-go">→</span></div>`;
const i = s.indexOf('id="dnTests"'), EMPTY = '<div class="dn-ill" aria-hidden="true"></div>', j = s.indexOf(EMPTY, i);
if (i < 0 || j < 0 || j - i > 6000) throw new Error("#dnTests illustration pane not found");
s = s.slice(0, j) + `<div class="dn-ill" aria-hidden="true">${FIGS.map(fig).join("")}</div>` + s.slice(j + EMPTY.length);
/* the foot link, after the last option of the panel */
const k = s.indexOf('id="dnTests"'), close = s.indexOf('\n      </div>\n      <div class="dn-ill"', k);
if (close < 0) throw new Error("dnTests options end not found");
s = s.slice(0, close) + '\n        <a class="dn-foot" href="#nsat">Register for NSAT →</a>' + s.slice(close);
const live = FIGS.map(([, , M, name]) => M.LIVE.replace("function mount(root)", "function " + name + "(root)")).join("\n");
rep("const figs = {}, M = { users: mountLife,", live + "\nconst figs = {}, M = { pencil: mountNsat, code: mountCodingNsat, users: mountLife,");
writeFileSync(FILE, s);
console.log("integrated the Entrance Tests figures", s.length);
