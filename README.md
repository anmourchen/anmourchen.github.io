# anmourchen.github.io

Personal academic website of **Yanfei Chen**, Staff Research Engineer at Google Cloud AI Research.

Live at <https://anmourchen.github.io/>.

## Stack

A single static page — no build step, no runtime framework.

- `index.html` — all content (bio, experience, education, publications, service).
- `assets/main.css` — self-contained styles with light/dark theming via CSS variables.
- `assets/main.js` — theme toggle and the Selected/All publications switch.
- `images/` — profile photo and favicons.

## Editing

- **Add a publication:** copy a `.paper` block inside the matching `.year-group` in
  `index.html`. Add `data-selected="true"` to feature it in the *Selected* view, and set the
  venue badge with `<span class="badge" data-venue="NeurIPS">NeurIPS 2024</span>` (recognized
  venues: NeurIPS, ICLR, ACL, EMNLP, EACL, COLM, arXiv).
- **Theme colors / spacing:** edit the CSS variables at the top of `assets/main.css`.

Deployed automatically via GitHub Pages on push to `master`.
