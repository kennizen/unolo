import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const BASE_PATH = process.env.BASE_URL ?? "http://localhost:3000";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // will be used to relogin the user if token expires by creating a service for refresh token
  console.log(cookies().get("ACCESS_TOKEN"));

  if (pathname === "/dashboard")
    return NextResponse.redirect(`${BASE_PATH}/dashboard/overview`, {
      status: 308,
    });

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image).*)"],
};
