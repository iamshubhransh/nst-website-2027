# NST website 2027 — mobile

The 2027 Newton School of Technology website, built section by section from the Figma file "NST Website 2026-27", mobile first, pixel-matched to the 402 px frames. Every interactive element runs for real here so it can be reviewed on a phone.

Live preview: https://iamshubhransh.github.io/nst-website-2027/

## What is in the page

- Figma frame 153:23441, top to bottom: top bar, hero, quick summary (93% stat, stats grid, companies), companies orbit with the CTC card, campus internship card, swipeable internship-win cards, placement-auditor card. A bottom bar with the play button and Apply Now (frame 153:32692) slides in once the hero has scrolled off the top and stays fixed.
- Live pieces so far: sun rays behind the hero copy, the play button that trades places with the NST mark, the particle field behind the 93% stat (drifts on its own, scatters away from the cursor or finger), the stat carousel, the company marquee, the swipeable win cards with dots, the sliding bottom bar. Scroll and entrance animations for the newer sections are not built yet.

## Working on it

- `index.html` is the whole page: styles at the top, markup, then the scripts. `assets/` holds every icon, logo and photo exported from Figma.
- Preview locally by opening `index.html`, or run `python3 -m http.server 8000` in this folder and open http://localhost:8000.
- Fonts come from Google Fonts (Mona Sans, widths 100 and 125).
- The hero campus film is a video fill in Figma. Until the file is added, a still is shown. Drop the film into `assets/`, then set `data-video="assets/<file>"` on the `#heroMedia` element.

## Deploying

GitHub Pages serves the `main` branch root. Push to `main` and the site updates within a minute or two.
