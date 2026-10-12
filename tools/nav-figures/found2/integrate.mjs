/* Replaces the isometric-campus backdrop in #found with the collage (found2/collage.mjs). Run once. */
import { readFileSync, writeFileSync } from "node:fs";
import { HTML, CSS } from "./collage.mjs";
const FILE = process.env.FIG_TARGET || "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
if (s.includes("found-collage")) throw new Error("the collage is already in the page");
/* 1 · the old element: from its opening tag up to the hairlines canvas that follows it */
const a = s.indexOf('<div class="found-art iso found-iso"');
const b = s.indexOf('<canvas class="found-lines"', a);
if (a < 0 || b < 0 || b - a > 200000 || s.indexOf('<div class="found-art iso found-iso"', a + 1) >= 0) throw new Error("old found-art element not found exactly once");
s = s.slice(0, a) + HTML + "\n    " + s.slice(b);
/* 2 · the old token/CSS block */
const c0 = s.indexOf("/* ===== seven foundations backdrop: an isometric NST campus");
const c1 = s.indexOf("@media (prefers-reduced-motion:reduce){ .found-iso .fd-warm{animation:none;opacity:.08} }", c0);
if (c0 < 0 || c1 < 0) throw new Error("old found-iso CSS block not found");
s = s.slice(0, c0) + s.slice(c1 + "@media (prefers-reduced-motion:reduce){ .found-iso .fd-warm{animation:none;opacity:.08} }".length);
/* 3 · the collage CSS, before the head-closing style tag */
const HEAD = "</style>\n</head>";
if (s.split(HEAD).length !== 2) throw new Error("head-closing </style> not found exactly once");
s = s.replace(HEAD, "/* ===== seven foundations backdrop v2: a collage of small anatomy-kit objects, dense at both edges, quiet behind the text ===== */" + CSS + HEAD);
writeFileSync(FILE, s);
console.log("integrated the foundations collage", s.length);
