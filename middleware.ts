import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "jmrhabitat.com";
const LEGACY_HOST = `www.${CANONICAL_HOST}`;

/**
 * Serve exactly one public URL for each page. This prevents the www and
 * non-www versions from being crawled as separate pages.
 */
export function middleware(request: NextRequest) {
  const host = request.headers
    .get("x-forwarded-host")
    ?.split(",")[0]
    .trim()
    .split(":")[0]
    .toLowerCase() ?? request.headers.get("host")?.split(":")[0].toLowerCase();

  if (host === LEGACY_HOST) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.protocol = "https:";
    canonicalUrl.host = CANONICAL_HOST;

    return NextResponse.redirect(canonicalUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
