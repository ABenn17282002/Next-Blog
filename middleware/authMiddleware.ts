import { NextResponse, NextRequest } from "next/server";
import { authenticate } from "./authProvider";

export async function authMiddleware(request: NextRequest) {
  const isAuthenticated = authenticate(request);

  if (!isAuthenticated) {
    // 認証されていない場合はログインページにリダイレクト
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 認証されている場合は次のミドルウェアに進む
  return NextResponse.next();
}
