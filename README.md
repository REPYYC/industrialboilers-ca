# IndustrialBoilers.ca — MITEY Industrial

Premium, static Alberta boiler equipment and project-planning site. Public preview: **https://industrialboilers-ca.pages.dev**. Repository: **https://github.com/REPYYC/industrialboilers-ca**.

## What is included

29 generated routes including the 404 route: home; five equipment guides; five service pathways; five Alberta regional pages; four substantive educational guides; equipment, services, Alberta and resources indexes; technical tools; project intake; about; privacy. The build also produces a standalone 404.html.

Original SVG boiler cutaway and Alberta map, interactive steam-loop explorer, filterable equipment taxonomy, searchable resources, accessible mobile navigation and reduced-motion support. Three tools cover liquid-water heating duty, conventional boiler horsepower conversion, and assumed annual fuel use. Static HTML provides page-specific metadata, canonical URLs, Open Graph tags, basic structured data, sitemap and crawl directives.

## Run and maintain

Requires Node.js 22+ and npm.

```sh
npm ci
npm run build
npm run check
npm run dev
```

Development server: http://127.0.0.1:4173. Generated files are in `dist/`; edit source, not generated HTML.

| File | Purpose |
| --- | --- |
| `src/content.mjs` | Equipment, service, region, guide copy and regulatory sources |
| `src/diagram.mjs` | Original vector illustration and diagrams |
| `scripts/build.mjs` | Shared templates, home, intake, tools, metadata and routes |
| `public/style.css` | Responsive design system |
| `public/app.js` | Navigation, filters, tools and project brief actions |
| `public/calculations.js` | Pure calculator functions |
| `scripts/check.mjs` | Internal links, page metadata and calculator reference checks |

## Enquiries — exact current behavior

The user confirmed **hello@mitey.ca** as the enquiry address. The intake validates project type, location, application, timeline, equipment/duty, contact information and acknowledgement. It prepares a `mailto:` email with an encoded project brief. **The visitor must review and send the email in their email application.** No server sends a message and no lead database exists. A text download is available; unusually long email links use the download fallback. The page never claims an enquiry was automatically sent.

Automatic website delivery is pending an authenticated outbound mail service and a confirmed business privacy/retention policy. Do not embed an email API key in browser code. If implementing it, use a server function, sender-domain verification, rate limiting, spam protection and field validation. Update the privacy notice and explicitly verify recipient delivery with an authorized test before claiming success.

## Deployment

Cloudflare account: `1b7e37300ea7889f97685c7d8d7c30b4`; project: `industrialboilers-ca`; production branch: `main`; publish directory: `dist`. This is a **Direct Upload** Pages project. It is not connected to Cloudflare Git integration.

For an authenticated local maintainer:

```sh
npm ci
npm run build
npm run check
npx wrangler pages deploy dist --project-name industrialboilers-ca --branch main
```

The quality workflow runs on main pushes and pull requests. A separate **manually triggered** GitHub deployment workflow is provided. Before using it, create a Cloudflare API token scoped to this account with **Cloudflare Pages: Edit**, save it as GitHub repository/environment secret `CLOUDFLARE_API_TOKEN`, and run “Deploy Cloudflare Pages” from Actions. No token has been copied into GitHub. Do not reuse or publish a desktop OAuth token. Automatic deployment on push is intentionally not configured until the dedicated token is supplied. Netlify fallback build settings are included; no Netlify site is created.

Build for a future verified domain by setting `SITE_URL=https://industrialboilers.ca` before building. Only do this when the domain is mapped and working. The default canonical and sitemap origin is the working pages.dev preview.

## Domain audit — 10 October 2026 (Edmonton time)

- Requested GitHub repository did not exist and was created as public under REPYYC.
- No existing Cloudflare Pages project or domain mapping for industrialboilers.ca was found across both account project pages.
- Cloudflare zone lookup for `industrialboilers.ca` returned no zone in the connected account.
- Authoritative nameservers: `ns03.domaincontrol.com`, `ns04.domaincontrol.com`.
- Apex A records: `15.197.148.33`, `3.33.130.190`; `www` CNAME: `industrialboilers.ca`.
- **No domain, DNS, nameserver, mail or existing deployment changes were made.**

### Exact safe next steps for the domain

1. Verify registrar/DNS access and ownership of IndustrialBoilers.ca. Export the current full DNS zone, including MX, TXT, DKIM, SPF and DMARC records; establish whether the existing apex serves anything that must be preserved.
2. A low-impact first route is **www.industrialboilers.ca**: add it in this Pages project's **Custom domains** section, then replace only the existing `www` CNAME with the target Cloudflare supplies (expected `industrialboilers-ca.pages.dev`). Confirm the mapping and active TLS. Do not create a bare CNAME without first adding the domain in Pages.
3. For an apex Pages domain, follow Cloudflare's current [custom-domain procedure](https://developers.cloudflare.com/pages/configuration/custom-domains/). An apex domain requires a Cloudflare zone. Import and verify the complete DNS zone before changing registrar nameservers. Preserve all mail-related records. Only cut over with verified ownership, a reviewed record diff and a recovery plan.
4. Confirm HTTPS on apex and www, choose the canonical host, and add the alternate-host redirect after verification. Rebuild with `SITE_URL` set to the chosen host, check sitemap/canonicals and redeploy. Keep the pages.dev preview accessible.
5. Submit the final domain sitemap to the verified Google Search Console property. No Search Console or DNS verification changes have been made.

## Claims and regulatory boundaries

The original ChatGPT ZIP and `/mnt/data/industrialboilers-mitey/` were inaccessible from this Windows workspace. The recovered attachment was a screenshot containing the domain name, not a logo or site. This is a fresh implementation of the requested direction; it does not claim to preserve unavailable source.

Do not add unverified ABSA certification, contractor partners, office locations, manufacturer/dealer relationships, stock, prices, testimonials or 24/7 emergency promises. MITEY's legal entity, credentials, service coverage and supply relationships remain unverified. Regional pages describe project considerations, not staffed offices. Inspection readiness is distinct from statutory inspection and Certificate of Inspection Permits. Regulated work needs the appropriately authorized parties and scope.

Regulatory resources are cited in the rendered guides and service/equipment pages. Sources checked 10 October 2026:

- [Alberta boilers and pressure vessels codes](https://www.alberta.ca/boilers-and-pressure-vessels-codes)
- [Pressure Equipment Safety Regulation, AR 49/2006 — Alberta King's Printer](https://kings-printer.alberta.ca/1266.cfm?display=html&isbncln=9780779849437&leg_type=Regs&page=2006_049.cfm)
- [ABSA acts, regulations and codes](https://www.absa.ca/about-absa/absa-information/acts-regulations-and-codes/)
- [ABSA owner responsibilities](https://www.absa.ca/inspections/owner/owner-responsibilities/)
- [ABSA contractor quality management requirements](https://www.absa.ca/inspections/contractors/qms-for-contractors/)
- [ABSA Certificate of Authorization Permit FAQs](https://www.absa.ca/qms-cap/faqs/)
- [AB-513 repair and alteration requirements](https://www.absa.ca/media/1500/ab-513_repair_and_alteration_requirements.pdf)
- [NIST Appendix B.8 conversion factors](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8)

Calculators are preliminary planning aids, not engineering selections or operating instructions. See each tool's displayed assumptions. Recheck regulatory sources before relying on them for any live project. No certification or regulator endorsement is implied.

## Design and privacy

Orange, charcoal and warm off-white with Barlow Condensed/DM Sans via Google Fonts. All diagrams and brand treatments in this implementation are original vector artwork; no stock contractor, employee or facility imagery is used. The illustrative MITEY wordmark is a design treatment, not a recovered official logo. The current privacy notice identifies Google Fonts and Cloudflare hosting; no analytics or advertising scripts were added. No paid builder was used.

## Validation and release status

Run `npm run check` for all internal paths, unique H1 presence, metadata and calculator reference cases (including equal/lower scenario efficiency). Desktop/mobile browser checks and live-deployment results are recorded in `RELEASE.md`. Publication is not complete until the Pages deployment reports success and the public URL responds correctly.
