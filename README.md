# Harsha Dave — Gujarati Classes Website

A warm, bilingual (English + Gujarati) one-page website for Harsha Dave's
Gujarati teaching classes in Brampton, ON.

## Files

| File | What it is |
|------|------------|
| `index.html` | The page structure and all content |
| `styles.css` | All styling (colors, layout, fonts, responsive design) |
| `script.js` | Mobile menu + contact-form handling |
| `README.md` | This file |

No build step, no frameworks — it's plain HTML/CSS/JS. Just open `index.html`
in any browser to preview it locally.

---

## Option A — Host free on GitHub Pages

1. Create a free account at https://github.com if you don't have one.
2. Click **New repository**. Name it anything (e.g. `gujarati-classes`).
   Make it **Public**. Click **Create repository**.
3. On the repo page, click **Add file → Upload files**.
4. Drag in `index.html`, `styles.css`, and `script.js` (and optionally
   `README.md`). Click **Commit changes**.
5. Go to **Settings → Pages** (left sidebar).
6. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
7. Wait ~1 minute. Your site will be live at:
   `https://YOUR-USERNAME.github.io/gujarati-classes/`

To use a custom domain (like `harshagujarati.com`) later, you can add it
under Settings → Pages → Custom domain.

---

## Option B — Host on Lovable

Lovable works best when you describe what you want, but you can also bring
this code in:

1. Open your Lovable project.
2. Use the file/editor view to create three files — `index.html`,
   `styles.css`, `script.js` — and paste in the contents of each.
3. Lovable will preview it automatically. Use its **Publish** button to go live.

(If Lovable expects a React/Vite structure, just tell it: "Use this as a static
HTML site," and paste the files. The code is plain HTML so it runs anywhere.)

---

## Option C — Other free hosts (drag-and-drop)

- **Netlify Drop** — https://app.netlify.com/drop — literally drag the folder
  onto the page and it's live in seconds.
- **Cloudflare Pages**, **Vercel**, **Render** — all support static sites free.

---

## Receiving inquiries by email (important!)

The contact form currently shows a thank-you message but does **not** send
emails yet. To receive real inquiries (free, ~2 minutes):

1. Sign up at https://formspree.io (free tier is fine).
2. Create a form — you'll get an endpoint like `https://formspree.io/f/abcdwxyz`.
3. Open `script.js` and paste that URL into the line:
   `const FORMSPREE_ENDPOINT = "";`  →  `const FORMSPREE_ENDPOINT = "https://formspree.io/f/abcdwxyz";`
4. Re-upload `script.js`. Submissions now arrive in your email.

Until then, visitors can always call **647-215-7209**, which is shown on the page.

---

## Editing content

All the text lives in `index.html` and is plain English/Gujarati — change phone
number, address, prices, or class descriptions directly there. Colors are at the
top of `styles.css` in the `:root` block if you ever want to adjust the palette.
