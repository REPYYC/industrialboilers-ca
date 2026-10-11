# Published release — 10 October 2026

## Confirmed public URLs

- Stable preview: **https://industrialboilers-ca.pages.dev/**
- Immutable deployment: **https://a0f8f1d4.industrialboilers-ca.pages.dev/**
- Public repository: **https://github.com/REPYYC/industrialboilers-ca**
- Tools: https://industrialboilers-ca.pages.dev/tools/
- Intake: https://industrialboilers-ca.pages.dev/contact/

Cloudflare project `industrialboilers-ca`, deployment `a0f8f1d4-acda-48ea-a84b-1717eba95351`, reported **deploy success** at 8:19 pm on 10 October 2026 in America/Edmonton (2026-10-11 02:19 UTC). Deployment metadata identifies source commit `c65dc49713cc6c80c5db5d2c5f15f4245f790dfb`, main branch, clean working tree. The subsequent release-documentation commit does not change the built site.

## What was verified

- All **28 sitemap content URLs** returned HTTP 200 and contained the expected canonical URL and one H1. The separate 404 route brings the total to 29 generated routes.
- A nonexistent public URL returned HTTP 404 and the custom error page.
- The raster social-sharing image returned HTTP 200 with `image/png`.
- Content Security Policy and `X-Content-Type-Options: nosniff` were present on the public homepage.
- Local build checks passed for 30 HTML files (29 routes plus standalone `404.html`), all internal href/src targets, descriptions, canonical tags and headings.
- Calculator reference cases passed: water heating, BHP conversion, fuel comparison, equal-efficiency case, lower-efficiency case and 8,760-hour case.
- Browser results changed correctly when water flow was doubled (279.1 → 558.1 kW) and assumed scenario efficiency was lowered from 85% to 75% (1,200 GJ/year increase versus the 80% baseline).
- Steam-loop controls changed the selected component and explanation.
- Public equipment filtering showed only the two water-system categories when selected. Searching resources for “winter” showed only the winter guide.
- Required intake fields rejected an empty form. A valid, synthetic enquiry generated the expected text download and explicitly stated that nothing had been sent. **No test email was sent.**
- Seven representative public pages (home, equipment index, inspection service, Calgary region, regulatory guide, tools, intake) were checked at widths **320, 390, 768 and 1440 pixels**: no horizontal document overflow across 28 layout checks. Desktop and phone screenshots were visually inspected during development.
- The public homepage browser console showed no errors or warnings.
- GitHub build-and-verify runs for the three application commits completed successfully. [Published application commit check](https://github.com/REPYYC/industrialboilers-ca/actions/runs/38104745585).

These are functional and layout checks, not an independent accessibility certification, engineering review or legal opinion.

## Live enquiry behavior

The user supplied **hello@mitey.ca** as the receiving address. The form prepares a structured email through the visitor’s email application or downloads a text brief. Sending still requires the visitor to send the email. The website has no automatic delivery, lead database or delivery confirmation. No enquiry data is stored by its JavaScript.

## Not connected or independently verified

- **IndustrialBoilers.ca custom domain:** not connected. Existing GoDaddy nameservers and apex/www records remain unchanged. Domain ownership and the full DNS/mail record set need verification before cutover. Follow the exact steps in README.
- **Automatic deployments:** the Pages site is deployed by Direct Upload. GitHub build checks are active. A manual deployment workflow is present, but its dedicated `CLOUDFLARE_API_TOKEN` secret is not configured. No desktop OAuth credential was copied to GitHub.
- **Automatic email delivery:** requires a verified sending domain/service, server-side implementation and business privacy/retention details. The current email draft and download paths are functional.
- **Business credentials and commercial claims:** legal entity details, ABSA authorization, service coverage, dealer relationships, inventory and pricing remain unverified. They are not invented in the site.
- **Earlier source:** the referenced ZIP and Linux sandbox source were not accessible; this is a fresh implementation of the requested MITEY/Alberta direction.

No paid site builder, builder credit purchase, DNS change, nameserver change, existing-site overwrite, unrelated repository change or outbound email was used to produce this release.
