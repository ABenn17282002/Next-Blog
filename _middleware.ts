import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log(
    "middleware.ts: request.nextUrl.pathname",
    request.nextUrl.pathname
  );

  return NextResponse.next();
}

export const config = {};
