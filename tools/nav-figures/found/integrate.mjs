/* Replaces the placeholder campus sketch in #found with the anatomy-kit campus. Run once. */
import { readFileSync, writeFileSync } from "node:fs";
import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import { SVG, CSS } from "./found.mjs";
const FILE = process.env.FIG_TARGET || "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
if (s.includes("found-iso")) throw new Error("the foundations backdrop is already in the page");
const IMG = '<img class="found-art" src="assets/found-campus-sketch.webp" alt="">';
if (s.split(IMG).length !== 2) throw new Error("found-art img not found exactly once");
s = s.replace(IMG, '<div class="found-art iso found-iso" data-theme="dark" aria-hidden="true">' + SVG + "</div>");
const HEAD = "</style>\n</head>";
if (s.split(HEAD).length !== 2) throw new Error("head-closing </style> not found exactly once");
const base = s.includes(".iso-halo{") ? "" : k.ISO_CSS;   /* the kit's styles are already in the page with the nav figures */
s = s.replace(HEAD, "/* ===== seven foundations backdrop: an isometric NST campus (anatomy kit), dark line art behind the text ===== */\n" + base + CSS + HEAD);
writeFileSync(FILE, s);
console.log("integrated the foundations backdrop", s.length);
