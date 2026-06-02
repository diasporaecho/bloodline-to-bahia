# Bloodline to Bahia 2028 — The Issue

### The Brothers' Heritage Carnival Run · *Magazine Edition*
**Three Cities. One Bloodline.** — São Paulo • Rio de Janeiro • Salvador

An editorial, magazine-style teaser for a private African American family men's heritage trip to
Brazil — built around brotherhood, ancestry, Carnival, Afro-Brazilian culture, and Chris's birthday.

This edition reads like a printed magazine: a dramatic cover, a table of contents, an editor's note,
a feature spread, a three-city photo essay, an index of themes, a dispatch, a full-bleed quote page,
a departures-board countdown, and a colophon. It stays high-level on purpose — no itineraries,
hotels, flights, addresses, budgets, or private family details.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The full issue — cover through colophon |
| `styles.css` | Editorial layout, cream/dark page rhythm, drop caps, pull quotes |
| `script.js` | Masthead reveal, contents menu, countdown, scroll animations |
| `assets/` | Place images here (logo, photos) |
| `README.md` | This file |

No backend, no database, no paid dependencies. Fonts load from Google Fonts.

---

## Quick customization

**1. Countdown date** — top of `script.js`:

```js
var TARGET_DATE = '2028-02-25T00:00:00';
```

**2. Interest List link** — in `index.html`, the R.S.V.P. button:

```html
<a href="#" class="btn btn--gold btn--lg">Join the Interest List</a>
```

Replace `href="#"` with your Google Form, Notion form, or private group-chat link.

**3. Logo (optional)** — drop a transparent PNG at `assets/bloodline-to-bahia-logo.png`;
it appears on the cover. If absent, the slot hides itself.

**4. Photo essay plates** — the three city panels currently show large engraved numerals
(I / II / III) on a dark plate. To use real photos instead, set a `background-image` on
`.essay__plate` in `styles.css` per city, or add `<img>` tags inside each plate.

**5. Colors & fonts** — CSS variables live at the top of `styles.css` under `:root`.
Masthead uses **Cinzel**; headlines use **Playfair Display**; body serif is **Cormorant Garamond**;
labels/captions use **Montserrat**.

---

## Deploy to GitHub Pages

1. Create a new repository (e.g. `bloodline-to-bahia-magazine`).
2. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets/` folder to the root.
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Pick the `main` branch and `/ (root)` folder, then **Save**.
6. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

Local preview:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

---

## Notes

- Fully responsive across phone, tablet, and desktop.
- Respects `prefers-reduced-motion`.
- The masthead bar stays hidden on the cover and slides in once you turn the page.

---

*Honoring the past. Celebrating the bloodline. Returning to Bahia.*
**Issue No. 01 · Private family heritage travel concept.**
