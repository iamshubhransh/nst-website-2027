# Nav illustrations (Life with NST)

These are small isometric figures drawn with the anatomy skill's kit (`~/.claude/skills/anatomy`, MIT). Its runtime is inlined into `index.html`.

They are deliberately quiet: each one supports the menu rather than leading it. Each option has its own colour, and the pane takes it on hover.

| File | Colour | Figure |
|---|---|---|
| `life.mjs` | orange | A campus corner: a hostel block whose windows light up, a tree, students, and a ball dribbling under the hoop. |
| `stories.mjs` | purple | An open book on a stack of books, with a ribbon; a page turns every few seconds. |
| `global.mjs` | blue | Two shores across a strip of sea; an airliner takes off from home, flies the dotted route and lands abroad. |

## Rebuilding

- **Preview one figure:** `node <figure>.mjs` writes a preview page of the pane.
- **Check it:** run `node ~/.claude/skills/anatomy/scripts/lines.mjs <figure>.html` with `CHROME_PATH` set.
- **Put it into the page:** `integrate.mjs` replaces the figures, styles and runtime in `index.html` between their markers. It can be re-run after a change.
