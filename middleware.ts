import { NextResponse, NextRequest } from 'next/server'
import { authenticate } from "./authProvider";
 
// ミドルウェア関数を定義
export function middleware(request: NextRequest) {
  const isAuthenticated = authenticate(request)
 
  // ユーザーが認証済みの場合、通常通り処理を続ける
  if (isAuthenticated) {
    return NextResponse.next()
  }
 
  // 認証されていない場合、ログインページにリダイレクト
  return NextResponse.redirect(new URL('/login', request.url))
}
 
// ミドルウェアの設定
export const config = {
  matcher: '/dashboard', // ダッシュボードのパスにのみ適用
}