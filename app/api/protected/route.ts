import { NextResponse } from "next/server";
import { verifyToken } from "../../../lib/auth";

/**
 * GET /api/protected
 * - Reads "token" cookie, verifies it, and returns decoded payload
 */
export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const token = cookieHeader
    .split("; ")
    .find((c) => c.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const decoded = verifyToken(decodeURIComponent(token));
  if (!decoded) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ user: decoded });
}