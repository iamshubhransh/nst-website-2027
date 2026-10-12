/* Replaces the About us figure in the More pane (#dnMore, option info) with the NST campus block. Run once. */
import { readFileSync, writeFileSync } from "node:fs";
import { tokens, THEMES } from "./common.mjs";
import * as AB from "./about.mjs";
const FILE = process.env.FIG_TARGET || "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
if (s.includes('class="ab-mark"')) throw new Error("the new About us figure is already in the page");
/* 1 · the figure element */
const OPEN = '<div class="dn-art dn-fig iso dn-iso" data-theme="light" data-fig="about"', END = '<span class="dn-go">→</span></div>';
const a = s.indexOf(OPEN); if (a < 0) throw new Error("old About figure not found");
const b = s.indexOf(END, a) + END.length;
s = s.slice(0, a) + `<div class="dn-art dn-fig iso dn-iso" data-theme="light" data-fig="about" data-k="info" data-acc="${THEMES.about.pane}" data-ink="${THEMES.about.ink}"><div class="dn-svg">${AB.SVG}</div><span class="dn-cap"><b>About us</b><span>The team and the story</span></span><span class="dn-go">→</span></div>` + s.slice(b);
/* 2 · the controller */
const m = s.indexOf("function mountAbout(root){"); if (m < 0) throw new Error("mountAbout not found");
const n = s.indexOf("\nfunction mount", m + 10); if (n < 0) throw new Error("end of mountAbout not found");
s = s.slice(0, m) + AB.LIVE.replace("function mount(root)", "function mountAbout(root)").trim() + "\n" + s.slice(n + 1);
/* 3 · tokens: replace the old about rule, add the new figure's CSS after it */
const T0 = '.iso.dn-iso[data-fig="about"],.iso.dn-iso[data-fig="about"][data-theme="light"]{', t = s.indexOf(T0); if (t < 0) throw new Error("old about tokens not found");
const te = s.indexOf("}", t) + 1;
s = s.slice(0, t) + tokens("about") + "\n/* About us: the NST campus block (navy) */" + AB.CSS + s.slice(te);
writeFileSync(FILE, s);
console.log("replaced the About us figure", s.length);
