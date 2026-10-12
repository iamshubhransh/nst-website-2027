# Nav illustrations (Life with NST)

These are isometric figures drawn with the anatomy skill's kit (`~/.claude/skills/anatomy`, MIT). Its runtime is inlined into `index.html`.

| File | Figure | What its motion means |
|---|---|---|
| `life.mjs` | 24-hour segment timer | Its 48 tappets are half-hours, and the pushed-in ones are booked. The block under the pointer is what's on now. The day's times are placeholders until NST's timetable is confirmed. |
| `stories.mjs` | Rotary card file | Each card is a student project, and the card standing upright is the story being read. |
| `global.mjs` | Split-flap departures board | The flaps spell each trip city, its great-circle distance from Delhi and its airport code. |

## Rebuilding

- **Preview one figure:** `node <figure>.mjs` writes `<figure>.html`, a preview of the 320 × 383 pane.
- **Check it:** the skill's line check is `node ~/.claude/skills/anatomy/scripts/lines.mjs <figure>.html`. It needs `CHROME_PATH` pointing at a Chrome or Chromium binary.
- **Put it into the page:** `integrate.mjs` was the one-off patch that put the figures, styles and runtime into `index.html`. To update a figure, replace its `<div class="dn-fig" data-k=…>` SVG and its `function mount…` in the page with the new build. Don't re-run the patch.
