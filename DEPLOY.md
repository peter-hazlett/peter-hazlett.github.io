# Deploying peterhazlett.com

The site source lives in this repo and is hosted free on **GitHub Pages** at the
custom domain **peterhazlett.com**. The domain stays registered at **Squarespace**
(we only change where it *points* — no transfer). Steps 1–2 are done; steps 3–5
are the one-time go-live actions.

GitHub repo: https://github.com/peter-hazlett/peter-hazlett.github.io
GitHub username: `peter-hazlett`  →  default Pages URL: `https://peter-hazlett.github.io`

---

## Order of operations

1. ✅ Repo created (`peter-hazlett.github.io`) and site pushed to `main`.
2. ✅ `CNAME` file present (contains `peterhazlett.com`).
3. ⬜ Enable GitHub Pages.
4. ⬜ Set DNS at Squarespace.
5. ⬜ Enable HTTPS.

---

## Step 3 — Enable GitHub Pages

1. Open **Settings → Pages**:
   https://github.com/peter-hazlett/peter-hazlett.github.io/settings/pages
2. **Source:** "Deploy from a branch".
3. **Branch:** `main`, folder **`/ (root)`** → **Save**.
4. Wait ~1–3 min, refresh. Confirm the build succeeds and the test URL works:
   **https://peter-hazlett.github.io**
5. The **Custom domain** field should auto-populate `peterhazlett.com` from the
   CNAME file. If not, type `peterhazlett.com` and Save.

---

## Step 4 — DNS at Squarespace

In Squarespace: **Domains → peterhazlett.com → DNS Settings**.

**First remove** any existing parking/default `A` records on `@` and any `CNAME`
on `www` that Squarespace pre-populated (otherwise the site won't resolve).

**Then add — Apex domain, four A records** (verified against GitHub docs):

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

**And — www subdomain, one CNAME:**

```
CNAME   www   peter-hazlett.github.io
```

Optional IPv6 (only if you want it; the four A records above are sufficient):

```
AAAA   @   2606:50c0:8000::153
AAAA   @   2606:50c0:8001::153
AAAA   @   2606:50c0:8002::153
AAAA   @   2606:50c0:8003::153
```

DNS propagation: minutes to ~48 hours (usually well under an hour).

---

## Step 5 — Enable HTTPS

1. Back in **Settings → Pages**, once DNS resolves (GitHub shows green checks on
   the domain), tick **Enforce HTTPS**.
2. The TLS certificate provisions automatically; can take a few minutes to ~1 hr.

---

## Verifying

- Test URL works immediately after step 3: `https://peter-hazlett.github.io`
- Apex resolves after DNS: `peterhazlett.com` and `www.peterhazlett.com`
- Check propagation: `dig peterhazlett.com +short` (should return the four
  185.199.x.x IPs), or use https://dnschecker.org.

---

## Updating the site later

Edit files locally, then:

```sh
cd "…/Personal Website/site"
git add -A
git commit -m "Update …"
git push
```

GitHub Pages rebuilds automatically within ~1 min. To preview locally first:

```sh
bundle exec jekyll serve --livereload   # http://localhost:4000/
```

(Adding a paper = a few lines in `_bibliography/papers.bib`; a syllabus = drop the
PDF in `assets/pdf/syllabi/` and add a line in `_pages/teaching.md`.)
