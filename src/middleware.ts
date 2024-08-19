import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.clone();

  console.log("Middleware triggered:", req.nextUrl.pathname);
  console.log("Token:", token);

  // Redirect to login if no token is present
  if (
    url.pathname.startsWith("/") &&
    !url.pathname.startsWith("/login") &&
    !url.pathname.startsWith("/signup")
  ) {
    console.log("Profile path");
    if (!token) {
      console.log("No token, redirecting to login");
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || "");
      console.log("Secret:", process.env.JWT_SECRET);
      await jwtVerify(token, secret);
      console.log("Token verified");
    } catch (error) {
      console.log("Invalid token, redirecting to login");
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  } else if (
    url.pathname.startsWith("/login") ||
    url.pathname.startsWith("/signup")
  ) {
    console.log("Login or signup path");
    if (token) {
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "");
        console.log("Secret:", process.env.JWT_SECRET);
        await jwtVerify(token, secret);
        console.log("Token verified, redirecting to profile");
        url.pathname = "/";
        return NextResponse.redirect(url);
      } catch (error) {
        console.log("Invalid token, staying on login/signup");
      }
    }
  }

  console.log("Next response");
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/signup"],
};
