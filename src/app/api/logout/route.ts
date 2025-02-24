import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  cookies().delete("ACCESS_TOKEN");
  return Response.json("Success");
}
