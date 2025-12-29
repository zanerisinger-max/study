import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "CHANGE_THIS_TO_A_STRONG_SECRET";

/**
 * POST /api/login
 * Body: { email, password }
 * - Demo: accepts demo@example.com / password
 * - On success sets an httpOnly cookie named "token"
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body || {};

    // DEMO check — replace with real DB lookup later
    const isValid = email === "demo@example.com" && password === "password";

    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const payload = { sub: "user-123", email };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    const res = NextResponse.json({ ok: true });
    res.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}