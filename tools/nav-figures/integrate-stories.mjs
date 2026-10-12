import { readFileSync, writeFileSync } from "node:fs";
import { tokens, THEMES } from "./common.mjs";
import * as ST from "./stories2.mjs";
const FILE = process.env.FIG_TARGET || "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
if (s.includes('class="st-card"')) throw new Error("already in");
/* the figure element */
const a = s.indexOf('data-fig="stories" data-k="book"'); if (a < 0) throw new Error("no stories fig");
const start = s.lastIndexOf('<div class="dn-art dn-fig', a);
const end = s.indexOf('<span class="dn-go">→</span></div>', a) + '<span class="dn-go">→</span></div>'.length;
const t = THEMES.stories;
s = s.slice(0, start) + `<div class="dn-art dn-fig iso dn-iso" data-theme="light" data-fig="stories" data-k="book" data-acc="${t.pane}" data-ink="${t.ink}"><div class="dn-svg">${ST.SVG}</div><span class="dn-cap"><b>Student stories</b><span>Projects by NST students</span></span><span class="dn-go">→</span></div>` + s.slice(end);
/* the controller */
const f0 = s.indexOf("function mountStories(root){"), f1 = s.indexOf("function mount", f0 + 10);
if (f0 < 0 || f1 < 0) throw new Error("no mountStories");
s = s.slice(0, f0) + ST.LIVE.replace("function mount(root)", "function mountStories(root)").trim() + "\n" + s.slice(f1);
/* tokens (teal) and styles, after the existing figure styles */
const ANCHOR = ".dn-fig .dn-svg svg{display:block;width:100%;height:100%}";
if (s.split(ANCHOR).length !== 2) throw new Error("anchor");
s = s.replace(ANCHOR, ANCHOR + "\n/* Student stories v3: students take turns sharing their stories; teal */\n" + tokens("stories") + ST.CSS);
writeFileSync(FILE, s); console.log("ok", s.length);
