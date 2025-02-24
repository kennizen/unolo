import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const BASE_PATH = process.env.BASE_URL ?? "http://localhost:3000";

function tokenExpired(expiry: number) {
  return Date.now() > expiry;
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const cookieData = cookies().get("ACCESS_TOKEN");

  if (pathname === "/sign-in" || pathname === "/sign-up")
    return NextResponse.next();

  if (!cookieData) return NextResponse.redirect(`${BASE_PATH}/sign-in`);

  const { expiry } = JSON.parse(cookieData.value);

  if (tokenExpired(Number(expiry)))
    return NextResponse.redirect(`${BASE_PATH}/sign-in`);

  if (pathname === "/dashboard")
    return NextResponse.redirect(`${BASE_PATH}/dashboard/overview`, {
      status: 308,
    });

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image).*)"],
};
