# Moving Service Dublin

Static copy of [www.movingservicedublin.com](https://www.movingservicedublin.com), rebuilt from the live public pages so it can be hosted on GitHub Pages. Wording, phone number, and page copy are unchanged.

The live site did not publish a `sitemap.xml` (it returned the Webflow 404) and `robots.txt` was empty. The first pass copied every page linked from the homepage, navigation, footer, services list, and area hub (28 pages). A second pass found 77 more pages that are published but not linked from anywhere. `sitemap.xml` lists all 105.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home |
| `/services/` | All services |
| `/house-removals-dublin/` | House removals |
| `/apartment-moving-service-dublin/` | Apartment moves |
| `/furniture-removals-dublin/` | Furniture and single items |
| `/man-with-a-van-dublin/` | Man with a van |
| `/man-with-a-van-dublin-city-centre/` | City centre man with a van |
| `/same-day-man-and-van-dublin/` | Same-day man and van |
| `/small-removals-dublin/` | Small removals |
| `/piano-removals-dublin/` | Piano removals |
| `/office-removals-dublin/` | Office removals |
| `/student-moving-service-dublin/` | Student moves |
| `/long-distance-removals-dublin/` | Long distance |
| `/van-hire-with-driver-dublin/` | Van hire with driver |
| `/areas-we-cover/` | Area hub |
| `/movers-lucan-dublin/` | Lucan |
| `/movers-tallaght-dublin/` | Tallaght |
| `/movers-clondalkin-dublin/` | Clondalkin |
| `/movers-blanchardstown-dublin/` | Blanchardstown |
| `/movers-castleknock-dublin/` | Castleknock |
| `/movers-swords-dublin/` | Swords |
| `/movers-dundrum-dublin/` | Dundrum |
| `/movers-sandyford-dublin/` | Sandyford |
| `/movers-blackrock-dublin/` | Blackrock |
| `/movers-rathmines-dublin/` | Rathmines |
| `/movers-dublin-6/` | Dublin 6 |
| `/movers-dublin-8/` | Dublin 8 |
| `/movers-dublin-12/` | Dublin 12 |

### Unlinked pages found afterwards (77)

These are live on `www.movingservicedublin.com` and on the Webflow staging host `km-investment-services.webflow.io`. Nothing in the nav, footer, or other pages links to them. None of the slugs tested returned 200 only on staging, so there is no separate “unpublished on live” set. Pages that are still only inside the Webflow Designer, with a slug that does not match these patterns, are not on either host and were not invented.

Movers by area: `/movers-ashbourne/`, `/movers-balbriggan/`, `/movers-bray/`, `/movers-cabinteely/`, `/movers-celbridge/`, `/movers-citywest/`, `/movers-clonsilla/`, `/movers-dalkey/`, `/movers-donabate/`, `/movers-dun-laoghaire/`, `/movers-dunboyne/`, `/movers-greystones/`, `/movers-kilcock/`, `/movers-killiney/`, `/movers-leixlip/`, `/movers-lusk/`, `/movers-malahide/`, `/movers-maynooth/`, `/movers-naas/`, `/movers-ongar/`, `/movers-portmarnock/`, `/movers-rathcoole/`, `/movers-ratoath/`, `/movers-rush/`, `/movers-saggart/`, `/movers-skerries/`, `/movers-stillorgan/`, `/movers-templeogue/`, `/movers-terenure/`

Dublin districts: `/movers-dublin-1/`, `/movers-dublin-2/`, `/movers-dublin-3/`, `/movers-dublin-4/`, `/movers-dublin-5/`, `/movers-dublin-7/`, `/movers-dublin-9/`, `/movers-dublin-10/`, `/movers-dublin-11/`, `/movers-dublin-13/`, `/movers-dublin-14/`, `/movers-dublin-16/`, `/movers-dublin-17/`, `/movers-dublin-20/`

Dublin to another city: `/removals-dublin-to-athlone/`, `/removals-dublin-to-belfast/`, `/removals-dublin-to-cork/`, `/removals-dublin-to-dundalk/`, `/removals-dublin-to-galway/`, `/removals-dublin-to-kilkenny/`, `/removals-dublin-to-limerick/`, `/removals-dublin-to-waterford/`, `/removals-dublin-to-wexford/`, `/removals-dublin-to-wicklow/`

Other services: `/appliance-removals-dublin/`, `/bed-delivery-dublin/`, `/cheap-man-with-a-van-dublin/`, `/downsizing-removals-dublin/`, `/flat-removals-dublin/`, `/fridge-freezer-moving-dublin/`, `/furniture-delivery-dublin/`, `/gym-equipment-moving-dublin/`, `/ikea-delivery-dublin/`, `/last-minute-removals-dublin/`, `/man-and-van-dublin/`, `/man-with-a-van-cost-dublin/`, `/man-with-a-van-north-dublin/`, `/man-with-a-van-south-dublin/`, `/moving-house-checklist-dublin/`, `/single-item-delivery-dublin/`, `/sofa-removals-dublin/`, `/wardrobe-removal-dublin/`, `/washing-machine-moving-dublin/`

Colleges: `/student-moves-dcu/`, `/student-moves-maynooth/`, `/student-moves-trinity-college/`, `/student-moves-tu-dublin/`, `/student-moves-ucd/`

How they were found: the Designer screenshot names matched hyphenated slugs (18 of 18, on both hosts). The same patterns (`movers-<place>`, `movers-dublin-<n>`, `removals-dublin-to-<city>`, `<item>-moving|delivery|removal(s)-dublin`, `student-moves-<college>`) were then checked across Dublin areas, Irish cities, and colleges. That added 59 more live pages. The live and staging sitemaps 404. Wayback’s CDX API was offline. A `site:` web search only returned the homepage. Crawling internal links never reached these URLs.

GitHub Pages serves each folder’s `index.html`. A request for `/services` redirects to `/services/`. Canonical tags point at the trailing-slash URL so they match the address that returns the page.

## Enable GitHub Pages

The repo is already public, which is required for free GitHub Pages.

1. Open the repository on GitHub: `kieran333/movingservicedublin`.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Branch: `main`. Folder: **`/ (root)`**. Save.
5. Wait until the Pages status says the site is live.

### Check the preview before changing DNS

This repo contains a `CNAME` file for `www.movingservicedublin.com`. After Pages is enabled, GitHub may redirect `https://kieran333.github.io/movingservicedublin/` to `www.movingservicedublin.com`, which still points at the current host until DNS is changed. That would show the old site, not this one.

To preview this copy first:

1. In **Settings → Pages**, clear the custom domain and save. Leave the `CNAME` file in the repo.
2. Open `https://kieran333.github.io/movingservicedublin/`.
3. Click through Home, Services, a service page, an area page, and the mobile menu.
4. When it looks right, set the custom domain back to `www.movingservicedublin.com` and continue with DNS below.

Do not change DNS until that preview looks right.

## DNS records

At the registrar or DNS host for `movingservicedublin.com`, add these records. Remove any existing `A`, `AAAA`, or `CNAME` records on `@` and `www` that point at Webflow (or anywhere else) at the same time, or the old records will keep winning.

**www** (this is the address in the `CNAME` file):

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `www` | `kieran333.github.io` |

**Apex** (`movingservicedublin.com`, so the bare domain also reaches GitHub Pages, which then serves the www site):

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optional IPv6:

| Type | Name | Value |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

After DNS has propagated, in **Settings → Pages** turn on **Enforce HTTPS**. Certificate provisioning can take a while after the domain starts resolving to GitHub.

## Activate the quote forms

Every quote form posts to [Formspree](https://formspree.io). Nothing is delivered until the placeholder id is replaced. Submitting before that shows the existing message: “Oops! Something went wrong while submitting the form.”

1. Create a free Formspree account and a new form.
2. Set the notification email to the address that should receive quotes.
3. Copy the form id. It is the last part of the endpoint, for example `https://formspree.io/f/abcdwxyz` → `abcdwxyz`.
4. Open `assets/js/form-config.js` and replace `YOUR_FORM_ID`:

```js
window.MSD_FORM_ENDPOINT = "https://formspree.io/f/abcdwxyz";
```

5. Commit that change to `main`. Pages will redeploy. Submit a test quote and confirm the email arrives.

The form fields are Your name, Phone number, Moving from, Moving to, Preferred date, and What needs moving. Placeholders are unchanged. Field names were given distinct values (`name`, `phone`, `moving_from`, `moving_to`, `preferred_date`, `details`) so the email is readable. On the live site every input was named `field`, so a submission could not tell them apart.

WhatsApp links (`https://wa.me/353873931146`) are unchanged. There were no `mailto:` links on the live site. Every visible `087 393 1146` is now a tap-to-call link to `tel:+353873931146`. The digits on the page are unchanged, and the link is styled to keep the surrounding text colour and weight.

Every page also includes LocalBusiness / MovingCompany JSON-LD built only from details printed on the site: the name Moving Service Dublin, the phone number, Dublin and Ireland (the footer says “Dublin, Ireland”, and the FAQ says the service covers all of Dublin and all of Ireland), the homepage URL, the site icon as the logo, and the footer line “Man with a van and house moves across Dublin city and county, seven days a week.” No street address and no opening hours were added, because the site does not show either.

The free Formspree plan includes a monthly submission cap. If that is too low, create a form at [Web3Forms](https://web3forms.com) and set `MSD_FORM_ENDPOINT` to `https://api.web3forms.com/submit` and add their access key the way that service documents. The HTML form already posts with `FormData`.

## What is self-hosted

Images, the favicon, CSS, JavaScript (including the interaction runtime, jQuery, and GSAP), and the fonts (Archivo Black, Instrument Sans, Manrope, Unbounded) are in `assets/`. Pages do not load `cdn.prod.website-files.com`.

Google Analytics stays on Google so it keeps recording. The measurement id is `G-YKK2K881LF` (gtag.js). No Google Tag Manager container id and no Search Console verification meta tag were present on the live pages.

## What could not be reproduced exactly

- **No sitemap or robots.txt on the live site.** `sitemap.xml` here lists all 105 pages. `robots.txt` allows all crawlers and points at that sitemap. The live `robots.txt` was an empty file, which also allows all crawlers. The staging host’s `robots.txt` is `Disallow: /` and its sitemap 404s.
- **No JSON-LD in the published HTML.** A small script on the live site looks for a raw JSON-LD text node and promotes it. No page contained one. That script is still included, and a MovingCompany block was added from the on-page business details described above.
- **No canonical or Open Graph URL tags on the live pages.** Those tags were added here, pointing at `https://www.movingservicedublin.com/...`, so the GitHub preview is not treated as a second copy of the site.
- **Trailing slashes.** Webflow served `/services`. GitHub Pages serves `/services/` and redirects `/services` to `/services/`. Canonicals use the slash form.
- **404 page.** Unknown URLs on the live site returned Webflow’s generic unstyled 404 (“Page not found” / “The page you are looking for doesn't exist or has been moved.”). `404.html` uses that same title and sentence inside this site’s header and footer, so people can still navigate.
- **Quote form delivery.** Webflow was not actually collecting these forms in a way that works off Webflow (method was GET, every field was named `field`, and a Cloudflare Turnstile key was present with no Turnstile script). They now post to Formspree once `assets/js/form-config.js` is filled in. The Turnstile attribute was dropped because it only validates Webflow-hosted posts.
- **“View all services” on the homepage** is an in-page `#` link on the live site as well. It was left as published. The Services item in the menu goes to `/services/`.
- **No video, no blog, and no extra CMS URLs** were linked or published. Nothing else turned up from the navigation, footer, or service and area pages.
- **Webflow badge and “made in Webflow” credit** are removed. The interaction scripts are kept so the mobile menu, scroll fades, and accordions still run. The badge is hidden if that runtime tries to insert one.
