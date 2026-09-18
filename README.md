# NST website 2027 — mobile

The 2027 Newton School of Technology website, built section by section from the Figma file "NST Website 2026-27", mobile first, pixel-matched to the 402 px frames. Every interactive element runs for real here so it can be reviewed on a phone.

Live preview: https://iamshubhransh.github.io/nst-website-2027/

## What is in the page

- Figma frame 153:23441, top to bottom: top bar, hero, quick summary (93% stat, stats grid, companies), companies orbit with the CTC card, campus internship card, swipeable internship-win cards, placement-auditor card. A bottom bar with the play button and Apply Now (frame 153:32692) slides in once the hero has scrolled off the top and stays fixed.
- Live pieces: sun rays behind the hero copy, the play button that trades places with the NST mark, the particle field behind the 93% stat (drifts on its own, scatters away from the cursor or finger), the stat carousel, the company marquee, the sliding bottom bar.
- Companies orbit: the headline highlights character by character as it moves up the screen (no pinning); the three logo discs sweep in from the right along the dashed circle, settle one by one, the centre company's name appears, then the ring keeps stepping left with the name following.
- Campus card: pins just above the bottom bar and holds for 120vh of scrolling. Slide 1's headline highlights, the first bar fills, the card switches to the next campus at the halfway point, slide 2 highlights, the second bar fills, then the page moves on. Slide 2 (Rishihood) carries placeholder numbers.
- Internship wins: focus carousel. The card in focus is full size, the next one waits at 0.907 scale; swiping brings it to the front. The small arrow on each card jumps to the next.

## Working on it

- `index.html` is the whole page: styles at the top, markup, then the scripts. `assets/` holds every icon, logo and photo exported from Figma.
- Preview locally by opening `index.html`, or run `python3 -m http.server 8000` in this folder and open http://localhost:8000.
- Fonts come from Google Fonts (Mona Sans, widths 100 and 125).
- The hero campus film is a video fill in Figma. Until the file is added, a still is shown. Drop the film into `assets/`, then set `data-video="assets/<file>"` on the `#heroMedia` element.

## Deploying

GitHub Pages serves the `main` branch root. Push to `main` and the site updates within a minute or two.
