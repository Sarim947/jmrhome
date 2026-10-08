import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "jmrhabitat.com";
const LEGACY_HOST = `www.${CANONICAL_HOST}`;

function originalScheme(request: NextRequest) {
  const cfVisitor = request.headers.get("cf-visitor");

  if (cfVisitor) {
    try {
      const scheme = JSON.parse(cfVisitor).scheme;
      if (scheme === "http" || scheme === "https") return scheme;
    } catch {
      // Fall through to the standard forwarding headers.
    }
  }

  return (
    request.headers.get("x-forwarded-proto")?.split(",")[0].trim() ??
    request.nextUrl.protocol.replace(":", "")
  );
}

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

  if (host === LEGACY_HOST || originalScheme(request) === "http") {
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
