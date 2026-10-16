# NST website 2027 — mobile

The 2027 Newton School of Technology website, built section by section from the Figma file "NST Website 2026-27", mobile first, pixel-matched to the 402 px frames. Every interactive element runs for real here so it can be reviewed on a phone.

Live preview: https://iamshubhransh.github.io/nst-website-2027/

## What is in the page

- Figma frame 153:23441, top to bottom: top bar, hero, quick summary (93% stat, stats grid, companies), companies orbit with the CTC card, campus internship card, swipeable internship-win cards, placement-auditor card (frame 234:18365: centred badge and titles, auditor logo marquee, two report cards with calendar icons). seven foundations (frame 234:36816: hanging lines with travelling pulses, a list of the seven buckets that steps up on a loop), then the five achievement buckets (see below). A bottom bar with the play button and Apply Now (frame 153:32692) slides in once the hero has scrolled off the top and stays fixed.
- Live pieces: sun rays behind the hero copy, the play button that trades places with the NST mark, the particle field behind the 93% stat (drifts on its own, scatters away from the cursor or finger), the stat carousel, the company marquee, the sliding bottom bar.
- Companies orbit: the headline highlights character by character as it moves up the screen (no pinning); the three logo discs sweep in from the right along the dashed circle, settle one by one, the centre company's name appears, then the ring keeps stepping left with the name following.
- Campus card (frame 234:14083): headline, student photos and a full-width stats block on a white dotted card. It pins under the top bar, fills the screen while locked and holds for 120vh of scrolling. Slide 1's headline highlights, the first bar fills, the card switches to the next campus at the halfway point, slide 2 highlights, the second bar fills, then the page moves on. Slide 2 (Rishihood) carries placeholder numbers.
- Video flow: the play button in the hero and in the bottom bar opens a full-screen overlay (frame 182:37578): the page dims and blurs, the current reel plays in a vertical card, the previous and next reels peek in from the edges at 86% scale, and a swipe (or a tap on a peeking card, or the arrow keys) switches reels on a loop. The bottom bar's play button turns into a back arrow that closes the overlay and returns to the same scroll position; tapping outside the card or pressing Escape does the same; tapping the playing card pauses and resumes. Reels live in `assets/videos/` as MP4s with JPG posters; add or reorder them in the `VIDEOS` list in `index.html`.
- Newton, the AI chat (frames 385:86140 button, 385:86567 first screen): the dock carries a purple orb button; tapping it opens a full-screen sheet (96% white, 16 px backdrop blur) with the thinking-orbs "searching" globe above "Hi, Ask me anything!", five prompt chips that cascade in, and the disclaimer, while the dock turns into the input pill and a send button. Close by tapping the faded NST mark at the top, swiping down, or Escape. The orb engine is `assets/vendor/thinking-orbs-engine.js` (the MIT npm package `thinking-orbs`, wrapped as a plain script). Sending opens the conversation (frame 390:107938): your message in a light-purple bubble, a 24 px orb above Newton's reply, the reply streaming in word by word, numbered step rows and follow-up chips. Answers are a placeholder table in `index.html` (`KB` + `RULES`, keyword-matched: admissions, curriculum, scholarship, fee, campuses, NSAT date, eligibility, counselling, visits, projects, and a fallback that refuses to guess) until the real agent is wired in. Three orb states only: "searching" on the welcome screen, "working" while Newton thinks, "breathing" once it has answered. Close with the × top-right, Escape, or a swipe down on the welcome screen; tapping the NST mark in a conversation starts a new chat. Touch moves on the sheet are swallowed so the page behind does not scroll.
- Achievement buckets, alternating dark and light: open source (frame 282:72461), competitive coding (282:80431), entrepreneurship (328:1959), global exposure (328:4384), research (328:9279). Every bucket shares a header (bar + title + line, the bar drawing in on arrival), 42/16 padding and a CTA. Assets are under `assets/oss`, `cc`, `ent`, `glob`, `res`.
  - Open source: proof card with a count-up, a contributor marquee that drifts, pauses under a finger, drags and resumes, the four-dot pager following it; stories in a focus carousel (front card full, the others at .6 with a shorter thumb); play buttons open the reels overlay.
  - Competitive coding: the #31 counts up; two rank cards snap-scroll; the standings ladder draws its dashed rail and lights the rows one by one, the NST row landing last with a green sweep; the lead story's Watch button and the Go for Gold card open the overlay.
  - Entrepreneurship: after the statement, the fund pipeline's dot travels stop to stop with the line filling behind it and the grant stop popping; three startup rows with phones under tinted glows, the row nearest mid-screen lifts its phone.
  - Global exposure: the dot-matrix map is a canvas drawn from a 31 × 74 bitmap, the arcs and pins an inline SVG. Dots fade in scattered, the arcs draw from Delhi one after another; the chips switch the trip's title, description, photo stack and the lit arc. The stack is three photos: drag the front one aside (or tap it) and it flies off and goes to the back.
  - Research: three white first pages in a snap carousel with a stamp, a folded corner and a page count; pages deal in on enter and the first stamp thumps.
- Curriculum (frame 364:56843, light): the foundations hairlines hang from the top edge; an ask bar types "How does the curriculum like at NST?", shows the Searching pill and hands back the send square, at which point the four year cards nudge outward once; a Year 1–4 slider (drag, flick, tap, keyboard) with a tick ruler that clicks as ticks pass the centre mark (Web Audio, after the first touch) and re-renders the pane below in that year's accent: subjects, in-class concept cards and project tiles. Tapping the ask bar opens Newton with the question. Year 1 copy is from the frame; Years 2–4 are placeholders. Assets under `assets/cur`.
- Faculty (frame 364:63430): company bubbles step left along a dashed ring (the placement-orbit mechanics), then a snap carousel of instructor cards with hairline feet and six dots. Three cards are placeholders.
- Four cities (390:129078): the campus sketch, then four gradient cards (Delhi NCR, Pune, Bengaluru, Hyderabad) each with a 20-second tour block that opens the reels overlay and an Explore button; cards rise in on arrival.
- Three ways in (396:131019): a conveyor of students flows into the NST tile and comes out the other side in NST merch; route tabs (NSAT, Coding NSAT, JEE percentile) swap the card. Routes 2–3 are placeholder copy.
- Admission process (397:133518): six numbered steps in a card, step 02 live with Apply Now / Prep kit; rows step in on arrival.
- Fests (396:131320): a dark dome with the aftermovie, a sponsor marquee, a photo grid, a drifting poster strip (drag to browse) and the button. The arrows switch Neutron ↔ Tekron: the chosen tile comes to the front and the copy swaps (Tekron is placeholder until its assets arrive). Assets under `assets/fac`, `ways`, `fest`.
- Talk to a senior (549:67454 phone, 549:69749 desktop): light threads hang from the fests' foot on the fest hairlines' 12 px grid (canvas, lengths from the frames); five seniors on the phone, seven on desktop, drop in and hang as damped pendulums that sway when the pointer passes; tap one to make it the active senior. Three senior cards with Request a call (placeholder link). The cards repeat the frame's placeholder senior.
- From the founders (582:69892): a dark sheet with 24 px top corners rises 56 px over the grey as it scrolls in; quote, the two founders, the Raj Shamani podcast card (still from the frame, waveform breathes while on screen; play is a placeholder link), backers grid, founders' story link.
- NST in news & media (582:70093): the curriculum's hairlines hang from the seam; a dot-less ticker of publications drifts left while on screen; seven press cards from Figma (NST Website 2025-26, 8674:83899): 287 × 348, a white 67 px head with the outlet logo and name, the article preview inset 15 at 80 and cut by the card; Govt. of Goa is a tweet card. A swipe strip with no dots (desktop also drags with the mouse); assets in `assets/news/`.
- NST resources (582:70461): four tool tiles with small working previews: the College Predictor types a rank and reveals results, the JEE Rank Predictor is a real slider (percentile → rank against ~14.44 lakh candidates), Study Buddy replays short exchanges, Headstart's progress bars fill.
- Countdown (582:70706): the page dips from white into night; live clock to 24 Dec 2026, 09:00 IST (time of day to confirm), ticking once a second while on screen; Register / Resume are placeholder links.
- FAQs & brochure (582:70841): topic chips filter a one-open accordion (All shows the frame's four; Admissions and Fees each add one more); the brochure booklet tilts toward the pointer; Download PDF is a placeholder.
- Footer (582:70946): bookend copy, Apply / Talk to a senior, six link groups (in-page anchors where a section exists), socials, degree line, the cropped NST wordmark that settles as the page ends. The dock steps aside over the footer.
- Sections 09–15 on desktop follow 605:108059 … 605:109463 (1728 frames): founders with four backers in a row; news with seven press cards in a bleed strip and a ticker that adds copies to cover any width; resources as a 588 + 588 grid; countdown with a slot picker that retargets the clock; FAQs in two columns with the booklet on the left; footer with six link columns and the full name as a cropped wordmark. Wrappers `.cd-l/.cd-l2/.cd-r` and `.faq-l/.faq-r` are `display:contents` on phones.
- Desktop nav (proposal 614:4822, motion after clerk.com): Admissions, Programs & Fees ▾, Life with NST ▾, Placements, Entrance Tests ▾, More ▾, Contact Us. Each ▾ opens a solid-white panel 8 px under the pill (options left, an illustration pane right that follows the hovered option); the pill is solid white (no translucency or blur); the other items keep full colour while a menu is open. Hover intent 80 ms, close 150 ms after leaving, Esc, ↓/↑, click toggles. Life with NST has three small animated isometric figures (anatomy skill; sources in `tools/nav-figures/`), each in its own colour that the pane takes on hover: a campus corner (orange), an open book turning a page (purple), an airliner crossing the sea (blue). The other menus still show placeholders (`.dn-ill`). On phones the same items live in the mobile menu (below).
- Desktop curriculum year slider: one ruler across the 1200 column, Year 1–4 at the quarter centres; click, drag along the ruler or ←/→. Bucket titles are 28/40 on desktop.
- Internship wins: two cards on a snap strip with dots. The card in focus is full size, the next one waits at 0.907 scale; swiping brings it to the front. The small arrow on each card goes to the other one.
- Mobile menu (16 Oct, frames 702:5108 / 702:27069): the hamburger folds into an X and the screen turns white under the floating bar. Rows are built at runtime from the desktop nav (`#dn` + `.dn-p` panels): Admissions →, Programs & Fees, Life with NST, Placements →, Entrance Tests, More, the groups opening in place as tinted accordions (one at a time) with the desktop icon tiles and campus photos. The current page is tagged "You're here". Ask Newton and Talk to a senior cards at the foot. Page scroll locked, dock hidden; Esc, the X or a real link closes it. Test: `node tools/nav/e2e-mnav.mjs`.
- Section bar (desktop, 16 Oct): once the hero has scrolled away, a slim grey bar slides in 8 px under the nav pill listing the page's sections ("On this page"); a white pill marks the section in view and slides between items; clicks glide there (anchor offset 148). Each page writes its own list (homepage after the header; placements at the top of `tools/placements/body.html`). Test: `node tools/nav/e2e-snav.mjs`.
- Admissions page (`admissions.html`, phone, 16 Oct 2026; Figma 718:5488): generated by `python3 tools/admissions/build.py` from the homepage shell + `tools/admissions/{body.html,adm.css,adm.js}`, reusing `tools/placements/pl.css` for the hero and FAQ. Hero = the placements hero with "the route in" (anatomy figure, `node tools/admissions/route.mjs`; step icons `icons.mjs`): the student walks register → NSAT → interview → counselling → block, lighting each flag, then on through the campus gate. Sections: summary tiles, three ways in (chooser), NSAT in one look, six steps, apply early, scholarships, loans, campuses, FAQs. No desktop design yet: the build switches the homepage desktop layer off (phone column on the grey stage). The nav's Admissions item now opens this page. Test: `node tools/admissions/e2e.mjs`.
- Rules of motion (25 Sep 2026): anything with dots is swipe-driven, never auto-playing; marquees without dots (hero logos, auditors, fest sponsors and posters) and the two orbits move on their own. Placeholder links (`href="#"`) do nothing; real anchors glide to just under the top bar. The menu button opens the mobile menu.

## Working on it

- Design decisions, Figma node IDs, token keys and the verification method are kept in the season folder, not here: `~/Documents/Newton School Code/nst2027/context/website-2027-handoff.md` (map) and `context/website-mobile-build-2026-09.md` (per-section notes).

- `index.html` is the whole page: styles at the top, markup, then the scripts. `assets/` holds every icon, logo and photo exported from Figma.
- Preview locally by opening `index.html`, or run `python3 -m http.server 8000` in this folder and open http://localhost:8000.
- Fonts come from Google Fonts (Mona Sans, widths 100 and 125).
- The hero campus film is a video fill in Figma. Until the file is added, a still is shown. Drop the film into `assets/`, then set `data-video="assets/<file>"` on the `#heroMedia` element.

## Deploying

GitHub Pages serves the `main` branch root. Push to `main` and the site updates within a minute or two.

## Desktop (≥ 1024 px)
A layer at the end of the stylesheet (`@media (min-width:1024px)`) re-lays the same DOM from Figma 511:3609: a 1200 px column, 40/48 section titles, header + device columns for the buckets, side-by-side campuses, a three-card wins carousel, wider rings and dome. Desktop-only nodes carry `.dt-only`; `.bk-side`, `.bk-main`, `.found-side` and `.wa` are `display:contents` on phones. Script branches read `isDT`. Below 1024 px the phone design is unchanged.

Pixel-matched so far: hero (512:24656), quick summary band, placement / campus / wins (514:26056). The desktop hero plays `assets/dt/hero-film.mp4`, exported from the Figma video fill (59 s loop, gradient baked in); phones keep the still.

## Placements page (`placements.html`, 13 Oct 2026)
Mobile-first build of Shubhransh's frame 632:26742. The page is **generated**: edit `tools/placements/{body.html,pl.css,pl.js}` and run `python3 tools/placements/build.py`.

- The build takes the shell from `index.html`: head, top bar, footer, dock, chat, menu sheet, video overlay, and the wins, proof-tile and CTC markup.
- It keeps only the shared-script blocks this page uses, plus the helpers they call.
- It keeps the homepage's desktop layer (≥ 1024 px); the placements desktop rules are the last block of `pl.css`.

Sections:
1. Light intern wall.
2. Live offers and the company arc.
3. 300-dot campus record.
4. Wins.
5. Sector barcode.
6. Split-flap board.
7. Story playlist with inline YouTube.
8. Recruiter thread.
9. FAQs, then the homepage footer.

Interaction test: `node tools/placements/e2e.mjs`, run with the local server on :8765.

### Placements desktop (13 Oct 2026)
Desktop (≥ 1024 px) follows the homepage system: the 1200 px column, section titles 28/40, kickers 14/28, sub-lines 18/28 and 120 px section padding.

Layout, section by section:
- Hero: copy left, a four-column intern wall right.
- CTC (v5, 16 Oct, frame 700:9706): white band, orange tab from the top edge, orange range, gold-outlined chips, the homepage particles along the top and bottom edges; `?ctc=4` shows the earlier gold stage.
- CTC v4 (gold stage, 96 px figure on desktop):
- Summary: four summary tiles in a row.
- Google: search left, result cards right.
- Live offers: a centred feed of 720.
- Campuses: side by side, with the report as one wide card below.
- Sectors: readout and barcode left, list right.
- Companies: list left, logo wall right.
- Stories: feature left, queue right.
- Recruiters: a 720 WhatsApp chat.
- FAQs: an 800 accordion.

Tests: `node tools/placements/e2e-dt.mjs` checks layout, every interaction and five widths, with no errors or failed requests. The phone test is `e2e.mjs`.
