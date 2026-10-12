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

## More menu (`more/`)

Seven figures in the same quiet style, each with its own pane colour:

| File | Option | Colour | Figure |
|---|---|---|---|
| `about.mjs` | About us | slate | The team around a table, with a whiteboard chart climbing |
| `dir.mjs` | Student directory | green | A board of student ID cards; a magnifier finds one |
| `blog.mjs` | Blogs | purple | A laptop with posts scrolling |
| `contact.mjs` | Contact us | teal | A phone whose chat fills in, and a map pin for campus visits |
| `iitr.mjs` | IIT Roorkee × NST | rose | A pillared institute wired to an AI chip, with a pulse along the link |
| `gold.mjs` | Go for Gold | gold | A winners' podium with a trophy |
| `startx.mjs` | Newton StartX | blue | A rocket lifting off its pad |

`more/integrate.mjs` was a one-off: it refuses to run twice.
