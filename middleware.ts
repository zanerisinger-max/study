import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Immediate protective middleware:
 * - Allows a small set of public paths.
 * - Requires an httpOnly cookie named "token" for all other routes.
 * - Redirects unauthenticated users to /login?from=<original>.
 *
 * Note: This checks only presence of cookie. Later we will verify the JWT here.
 */

const PUBLIC_PATHS = [
  "/",
  "/login",
  "/signup",
  "/api/login",
  "/api/signup",
  "/favicon.ico",
  "/robots.txt",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow internal Next assets and explicit public paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p))
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If token exists we allow access for now. Later we'll verify token validity here.
  return NextResponse.next();
}

/*
  Apply middleware to all routes except typical static assets.
  Adjust matcher if you need to allow additional public paths.
*/
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"],
};