import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";
import { kitScript } from "/Users/shubhanshbhaskar/.claude/skills/anatomy/scripts/inline-kit.mjs";
export { k, G, kitScript };
/* the figure sits above the caption in the 320 × 383 pane; kept small so it supports the menu rather than leading it */
export const W = 320, H = 300;
/* one quiet token set per option, tinted to its pane: paper = the pane, the one lit part = the option's colour */
export const THEMES = {
  life:    { pane: "#FEF3E0", ink: "#C77A00", t: { paper: "#FEF3E0", top: "#FFFAF1", s: ["#EEDCBD", "#F2E3C8", "#F6E9D3", "#FAEFDD"], hi: "#5A4426", mid: "#A88A5C", lo: "#D2BA92", faint: "#E9D8B9", lit: "#C77A00", face: "#F59700", litTop: "#FFB547", litShade: "#E08A00", halo: "#7A5A20" } },
  stories: { pane: "#F0EBFD", ink: "#7B55EE", t: { paper: "#F0EBFD", top: "#FBF9FF", s: ["#DCD3F3", "#E3DCF6", "#E9E3F9", "#EFEBFC"], hi: "#3A305C", mid: "#8A7DB3", lo: "#BBB1DB", faint: "#D8D0F0", lit: "#7B55EE", face: "#9B7BF5", litTop: "#B9A2FA", litShade: "#8A66F0", halo: "#4A3A88" } },
  global:  { pane: "#E5F1FF", ink: "#0673F9", t: { paper: "#E5F1FF", top: "#F7FBFF", s: ["#CCDDF2", "#D5E4F6", "#DDEAF9", "#E5EFFC"], hi: "#1E3A5C", mid: "#6A88AE", lo: "#A6BEDA", faint: "#C9DAEE", lit: "#0673F9", face: "#FFFFFF", litTop: "#FFFFFF", litShade: "#E6F0FD", halo: "#244C80" } },
};
export function tokens(key) {
  const t = THEMES[key].t;
  return `.iso.dn-iso[data-fig="${key}"],.iso.dn-iso[data-fig="${key}"][data-theme="light"]{--anatomy-card:${t.paper};--anatomy-paper:${t.paper};--anatomy-face:${t.face};--anatomy-top:${t.top};` +
    t.s.map((c, i) => `--anatomy-shade-${i}:${c};`).join("") +
    `--anatomy-lit-top:${t.litTop};--anatomy-lit-shade:${t.litShade};--anatomy-hi:${t.hi};--anatomy-mid:${t.mid};--anatomy-lo:${t.lo};--anatomy-faint:${t.faint};--anatomy-lit:${t.lit};--anatomy-halo:${t.halo};--anatomy-halo-opacity:.2;--anatomy-dot:${t.hi};--anatomy-weight:.6px}`;
}
export function previewPage({ key, title, svg, cap, sub, live, css }) {
  return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mona+Sans:wdth,wght@100,500;100,600;100,700&display=swap">
<style>${k.ISO_CSS}${tokens(key)}${css}
body{margin:0;background:#fff;font-family:"Mona Sans",Arial,sans-serif;display:grid;place-items:center;min-height:100vh}
.pane{position:relative;width:320px;height:383px;border-radius:12px;background:${THEMES[key].pane};overflow:hidden}
.fig{position:absolute;left:0;top:8px;width:${W}px;height:${H}px}.fig svg{display:block;width:100%;height:100%}
.cap{position:absolute;left:16px;bottom:16px;display:flex;flex-direction:column;gap:2px}.cap b{font-size:16px;line-height:22px;font-weight:600;color:#16191D}.cap span{font-size:13px;line-height:18px;color:rgba(22,25,29,.6)}
.go{position:absolute;right:16px;bottom:16px;width:36px;height:36px;border-radius:18px;background:#fff;display:flex;align-items:center;justify-content:center;font-weight:600}
</style></head><body><div class="pane iso dn-iso" data-theme="light" data-fig="${key}"><div class="fig">${svg}</div><span class="cap"><b>${cap}</b><span>${sub}</span></span><span class="go">→</span></div>
<script type="module">${kitScript().replace(/<\/(script)/gi, "<\\/$1")}
${live}
const m = mount(document.querySelector('.pane')); m.start(); window.__fig = m;
</script></body></html>`;
}
export const pathOfWorld = (pts, P, closed) => k.pathOf(pts.map((p) => k.iso(p, P)), closed);
