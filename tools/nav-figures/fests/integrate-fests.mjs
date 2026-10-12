/* Adds the Tekron (rust) and Neutron (violet) figures to the Life with NST pane (#dnLife, options spark / zap). Run once. */
import { readFileSync, writeFileSync } from "node:fs";
import { tokens, THEMES } from "./common.mjs";
import * as TK from "./tekron.mjs";
import * as NT from "./neutron.mjs";
const FILE = process.env.FIG_TARGET || "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
const rep = (a, b) => { const n = s.split(a).length - 1; if (n !== 1) throw new Error("count " + n + " for " + a.slice(0, 80)); s = s.replace(a, b); };
if (s.includes('data-fig="tekron"')) throw new Error("the fest figures are already in the page");
const FIGS = [["spark", "tekron", TK, "mountTekron", "Tekron", "Tech-cultural fest, Pune"], ["zap", "neutron", NT, "mountNeutron", "Neutron", "Tech-cultural fest, Delhi"]];
const ANCHOR = ".dn-fig .dn-svg svg{display:block;width:100%;height:100%}";
rep(ANCHOR, ANCHOR + `
/* Life with NST fests: Tekron rust (a robotics arena), Neutron violet (a concert stage) */
${FIGS.map(([, key, M]) => tokens(key) + M.CSS).join("")}`);
const fig = ([k, key, M, , cap, sub]) => `<div class="dn-art dn-fig iso dn-iso" data-theme="light" data-fig="${key}" data-k="${k}" data-acc="${THEMES[key].pane}" data-ink="${THEMES[key].ink}"><div class="dn-svg">${M.SVG}</div><span class="dn-cap"><b>${cap}</b><span>${sub}</span></span><span class="dn-go">→</span></div>`;
const i = s.indexOf('id="dnLife"'), OPEN = '<div class="dn-ill" aria-hidden="true">', j = s.indexOf(OPEN, i);
if (i < 0 || j < 0 || j - i > 8000) throw new Error("#dnLife illustration pane not found");
s = s.slice(0, j + OPEN.length) + FIGS.map(fig).join("") + s.slice(j + OPEN.length);
const live = FIGS.map(([, , M, name]) => M.LIVE.replace("function mount(root)", "function " + name + "(root)")).join("\n");
rep("const figs = {}, M = { ", live + "\nconst figs = {}, M = { spark: mountTekron, zap: mountNeutron, ");
writeFileSync(FILE, s);
console.log("integrated the fest figures", s.length);
