/* Admissions · step icons: the hero figure's objects (register, NSAT, interview, counselling, block, campus) drawn alone, each fitted
   to a square, so the six-step timeline speaks the same isometric language as the route above it.
   Writes ic-<name>.svg. Run: node tools/admissions/icons.mjs */
import { writeFileSync } from "node:fs";
import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import { O } from "../nav-figures/found3/objects.mjs";

const N = 96;
for (const name of ["monitor", "papers", "board", "table", "letter", "arch"]) {
  const P = k.fitProjection(O[name].box, N, N, { pad: 8, azimuth: 148, elevation: 30 });
  const svg = `<svg class="iso-svg adm-ic-svg" viewBox="0 0 ${N} ${N}" aria-hidden="true">${O[name].draw(P)}</svg>`
    .replace(/ d="([^"]*)"/g, (m, d) => ' d="' + d.replace(/-?\d+\.\d{2,}/g, (n) => (+n).toFixed(1)) + '"');
  writeFileSync(new URL(`./ic-${name}.svg`, import.meta.url), svg);
  console.log(name, svg.length);
}
