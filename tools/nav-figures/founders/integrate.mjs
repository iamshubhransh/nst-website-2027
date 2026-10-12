import { readFileSync, writeFileSync } from "node:fs";
import { SVG_L, SVG_R, CSS, LIVE } from "./mics.mjs";
const FILE = "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
const rep = (a, b) => { const n = s.split(a).length - 1; if (n !== 1) throw new Error("count " + n + " for " + a.slice(0, 60)); s = s.replace(a, b); };
if (s.includes("fdr-mic-l")) throw new Error("already in");
rep('<div class="fdr-sheet" id="fdrSheet">', '<div class="fdr-sheet" id="fdrSheet">\n      <!-- backdrop (anatomy kit): two studio mics in the gutters, taking turns; desktop ≥ 1360 only -->\n      <div class="fdr-mic fdr-mic-l iso fdr-iso" data-theme="dark" aria-hidden="true">' + SVG_L + '</div><div class="fdr-mic fdr-mic-r iso fdr-iso" data-theme="dark" aria-hidden="true">' + SVG_R + '</div>');
rep("</style>\n</head>", "/* ===== founders backdrop: studio mics (anatomy kit), desktop ≥ 1360 ===== */\n.fdr-sheet{position:relative}\n" + CSS + "</style>\n</head>");
{ const i = s.lastIndexOf("</body>"); s = s.slice(0, i) + "<script>" + LIVE + "</script>\n" + s.slice(i); }
writeFileSync(FILE, s); console.log("ok", s.length);
