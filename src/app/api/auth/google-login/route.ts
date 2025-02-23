import { NextRequest } from "next/server";
import { OAuth2Client } from "google-auth-library";
import { cookies } from "next/headers";

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.BASE_URL,
);

export async function POST(req: NextRequest) {
  try {
    const code = (await req.json()) as { code: string };

    const { tokens } = await oAuth2Client.getToken(code);

    const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      method: "GET",
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    const userData = await res.json();

    cookies().set(
      "ACCESS_TOKEN",
      JSON.stringify({
        token: tokens.access_token,
        expiry: tokens.expiry_date,
      }),
      {
        httpOnly: true,
      },
    );

    return Response.json(userData);
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
