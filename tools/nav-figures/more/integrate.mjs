/* Adds the seven More-menu figures to index.html: run once, after the Life with NST figures are in (nav2/integrate.mjs).
   It appends tokens and styles to the existing "nav illustrations" style block, fills #dnMore's illustration pane,
   and adds the controllers to the existing nav-illustrations module script and its M map. */
import { readFileSync, writeFileSync } from "node:fs";
import { tokens, THEMES, H } from "./common.mjs";
import * as AB from "./about.mjs";
import * as DR from "./dir.mjs";
import * as BL from "./blog.mjs";
import * as CT from "./contact.mjs";
import * as IR from "./iitr.mjs";
import * as GD from "./gold.mjs";
import * as SX from "./startx.mjs";
const FILE = process.env.FIG_TARGET || "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
const rep = (a, b) => { const n = s.split(a).length - 1; if (n !== 1) throw new Error("count " + n + " for " + a.slice(0, 80)); s = s.replace(a, b); };
if (s.includes('data-fig="about"')) throw new Error("the More figures are already in the page");
const FIGS = [
  ["info", "about", AB, "mountAbout", "About us", "The team and the story"],
  ["card", "dir", DR, "mountDirectory", "Student directory", "Find and reach NST students"],
  ["news", "blog", BL, "mountBlog", "Blogs", "Stories, guides and updates"],
  ["chat", "contact", CT, "mountContact", "Contact us", "FAQs, calls and campus visits"],
  ["landmark", "iitr", IR, "mountIITR", "IIT Roorkee × NST", "Government-backed project"],
  ["trophy", "gold", GD, "mountGold", "Go for Gold", "goforgold.in"],
  ["rocket", "startx", SX, "mountStartX", "Newton StartX", "Entrepreneurship at NST"],
];
/* 1 · styles: tokens and each figure's CSS, and the taller figure box of the More pane (320 × 501) */
const ANCHOR = ".dn-fig .dn-svg svg{display:block;width:100%;height:100%}";
rep(ANCHOR, ANCHOR + `
/* More menu: About us slate, Student directory green, Blogs purple, Contact us teal, IIT Roorkee rose, Go for Gold gold, StartX blue */
${FIGS.map(([, key, M]) => tokens(key) + M.CSS).join("")}
#dnMore .dn-fig .dn-svg{height:${H}px}`);
/* 2 · markup */
const fig = ([k, key, M, , cap, sub]) => `<div class="dn-art dn-fig iso dn-iso" data-theme="light" data-fig="${key}" data-k="${k}" data-acc="${THEMES[key].pane}" data-ink="${THEMES[key].ink}"><div class="dn-svg">${M.SVG}</div><span class="dn-cap"><b>${cap}</b><span>${sub}</span></span><span class="dn-go">→</span></div>`;
const i = s.indexOf('id="dnMore"'), EMPTY = '<div class="dn-ill" aria-hidden="true"></div>', j = s.indexOf(EMPTY, i);
if (i < 0 || j < 0 || j - i > 8000) throw new Error("#dnMore illustration pane not found");
s = s.slice(0, j) + `<div class="dn-ill" aria-hidden="true">${FIGS.map(fig).join("")}</div>` + s.slice(j + EMPTY.length);
/* 3 · controllers */
const live = FIGS.map(([, , M, name]) => M.LIVE.replace("function mount(root)", "function " + name + "(root)")).join("\n");
rep("const figs = {}, M = { users: mountLife, book: mountStories, globe: mountGlobal };",
  live + "\nconst figs = {}, M = { users: mountLife, book: mountStories, globe: mountGlobal, " + FIGS.map(([k, , , name]) => k + ": " + name).join(", ") + " };");
writeFileSync(FILE, s);
console.log("integrated the More figures", s.length);
