import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest){
  // console.log('accessing ', request.url);
  // console.log('nextURL', request.nextUrl);
  if(request.url.includes('/dashboard')){
    return NextResponse.redirect(new URL('/comments', request.nextUrl));
  }

  const response = NextResponse.next();

  response.cookies.set("my-cookie", "dark");
  response.headers.set("my-header", "my-header");
  return response;
}