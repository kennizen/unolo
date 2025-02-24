import { jwtDecode } from "jwt-decode";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const data = req.cookies.get("ACCESS_TOKEN");

  if (!data)
    return Response.json("User details not found", {
      status: 404,
    });

  const { idToken } = JSON.parse(data.value);
  const { name, email, given_name, family_name, picture } = jwtDecode(
    idToken,
  ) as Record<string, any>;

  return Response.json({
    name,
    email,
    given_name,
    family_name,
    picture,
  });
}
