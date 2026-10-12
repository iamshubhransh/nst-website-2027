import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import { kitScript } from "/Users/shubhanshbhaskar/.claude/skills/anatomy/scripts/inline-kit.mjs";
export { k, kitScript };
export const KIT = "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/";
/* the "Life with NST" pane: 320 × 383, tint #E6F4EE, ink #007A51. The figure sits between the readout pill (top) and the caption (bottom). */
export const W = 320, H = 276;
export const TOKENS = `
.iso.dn-iso,.iso.dn-iso[data-theme="light"]{--anatomy-card:#E6F4EE;--anatomy-paper:#E6F4EE;--anatomy-face:#FFFFFF;--anatomy-top:#F5FAF7;
  --anatomy-shade-0:#C6DACF;--anatomy-shade-1:#D0E2D7;--anatomy-shade-2:#DAE9E0;--anatomy-shade-3:#E3EFE8;
  --anatomy-lit-top:#FFFFFF;--anatomy-lit-shade:#DDEEE5;
  --anatomy-hi:#1D3127;--anatomy-mid:#668576;--anatomy-lo:#9BB5A8;--anatomy-faint:#C2D6CA;--anatomy-lit:#007A51;
  --anatomy-halo:#244A39;--anatomy-halo-opacity:.24;--anatomy-dot:#24382E;
  --anatomy-weight:.6px;--anatomy-mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace}
`;
/* a preview page that looks like the nav pane, for capture and the line check */
export function previewPage({ title, svg, readout, cap, sub, live }) {
  const css = k.ISO_CSS + TOKENS + `
body{margin:0;background:#fff;font-family:"Mona Sans","Helvetica Neue",Arial,sans-serif;display:grid;place-items:center;min-height:100vh}
.pane{position:relative;width:320px;height:383px;border-radius:12px;background:#E6F4EE;overflow:hidden}
.pane .fig{position:absolute;left:0;top:44px;width:${W}px;height:${H}px}
.pane svg{display:block;width:100%;height:100%}
.tag{position:absolute;left:16px;top:16px;padding:3px 8px;border-radius:100px;background:rgba(255,255,255,.7);font-size:11px;line-height:16px;font-weight:600;letter-spacing:.4px;color:#007A51}
.cap{position:absolute;left:16px;bottom:16px;display:flex;flex-direction:column;gap:2px}
.cap b{font-size:16px;line-height:22px;font-weight:600;color:#16191D}.cap span{font-size:13px;line-height:18px;color:rgba(22,25,29,.6)}
.go{position:absolute;right:16px;bottom:16px;width:36px;height:36px;border-radius:18px;background:#fff;display:flex;align-items:center;justify-content:center;font-weight:600}
`;
  return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mona+Sans:wdth,wght@100,500;100,600;100,700&display=swap">
<style>${css}</style></head><body>
<div class="pane iso dn-iso" data-theme="light"><span class="tag" data-readout>${readout}</span><div class="fig" tabindex="0">${svg}</div><span class="cap"><b>${cap}</b><span>${sub}</span></span><span class="go">→</span></div>
<script type="module">${kitScript().replace(/<\/(script)/gi, "<\\/$1")}
${live}
const m = mount(document.querySelector('.pane'), (t) => { document.querySelector('[data-readout]').textContent = t; });
m.start();
window.__fig = m;
</script></body></html>`;
}
/* screen matrix for local text/art laid in a plane: origin O, unit u (text →), unit v (text ↓) in world space */
export function planeMatrix(O, u, v, P) {
  const o = k.iso(O, P), a = k.iso([O[0] + u[0], O[1] + u[1], O[2] + u[2]], P), b = k.iso([O[0] + v[0], O[1] + v[1], O[2] + v[2]], P);
  const f = (n) => +n.toFixed(4);
  return `matrix(${f(a[0] - o[0])} ${f(a[1] - o[1])} ${f(b[0] - o[0])} ${f(b[1] - o[1])} ${f(o[0])} ${f(o[1])})`;
}
export const quad = (pts, P) => k.pathOf(pts.map((p) => k.iso(p, P)), true);
