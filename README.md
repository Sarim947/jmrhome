# JMRHOME Next.js Site

This is the Next.js conversion of the original static HTML site.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Main routes

- `/`
- `/about`
- `/products`
- `/products/essentials`
- `/products/classic-3670`
- `/products/pivot-prime-5893`
- `/products/fusion-5843`
- `/products/neoclassical-2250`
- `/products/moonlight-3610`
- `/daily`
- `/blog`
- `/blog/pivot-vs-traditional`

## Notes

The old PHP contact form was converted to a frontend mail client flow with `mailto:`. If you want server-side email delivery in Next.js, connect an email service in an API route.

## Google Tag Manager

Set `NEXT_PUBLIC_GTM_ID` in Vercel to the new Google Tag Manager container ID for the production domain, for example `GTM-XXXXXXX`.

## Meta Pixel

Set `NEXT_PUBLIC_META_PIXEL_ID` in Vercel to the Meta Pixel ID for the production domain. Leave it empty locally if you do not want Meta Pixel to load during development.
