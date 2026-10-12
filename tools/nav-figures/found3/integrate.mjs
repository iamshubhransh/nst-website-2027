/* Replaces the v2 collage in #found with the v3 connected campus town (found3/town.mjs). Run once. */
import { readFileSync, writeFileSync } from "node:fs";
import { HTML, CSS } from "./town.mjs";
const FILE = process.env.FIG_TARGET || "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
if (s.includes("found-town")) throw new Error("the town backdrop is already in the page");
/* 1 · the element: from the collage's opening tag up to the hairlines canvas */
const OPEN = '<div class="found-collage iso fc-iso"';
const a = s.indexOf(OPEN), b = s.indexOf('<canvas class="found-lines"', a);
if (a < 0 || b < 0 || s.indexOf(OPEN, a + 1) >= 0 || b - a > 400000) throw new Error("v2 collage element not found exactly once");
s = s.slice(0, a) + HTML + "\n    " + s.slice(b);
/* 2 · the v2 CSS block */
const C0 = "/* ===== seven foundations backdrop v2:", C1 = "@media (prefers-reduced-motion:reduce){ .found-collage .fc-svg{animation:none} }";
const c0 = s.indexOf(C0), c1 = s.indexOf(C1, c0);
if (c0 < 0 || c1 < 0 || s.indexOf(C0, c0 + 1) >= 0) throw new Error("v2 collage CSS block not found exactly once");
s = s.slice(0, c0) + s.slice(c1 + C1.length);
/* 3 · the v3 CSS, before the head-closing style tag */
const HEAD = "</style>\n</head>";
if (s.split(HEAD).length !== 2) throw new Error("head-closing </style> not found exactly once");
s = s.replace(HEAD, "/* ===== seven foundations backdrop v3: one connected campus town (roads, blocks, the foundation objects), strongest at the edges ===== */" + CSS + HEAD);
writeFileSync(FILE, s);
console.log("integrated the foundations town", s.length);
