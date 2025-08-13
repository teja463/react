import { cookies, headers } from "next/headers";
import type { NextRequest } from "next/server";

export async function  GET(request: NextRequest){
  /* const headers = request.headers;
  console.log('headers', headers);

  const cookies = request.cookies;
  console.log('cookies', cookies); */

  const header = await headers();
  const cookie = await cookies();

  console.log(header.get('my-header'))
  console.log(cookie.get('my-cookie'))


  return new Response("Hello");
}