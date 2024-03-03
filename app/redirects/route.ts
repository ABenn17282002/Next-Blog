// NextRequest, NextResponseのインポート
import { NextRequest, NextResponse } from "next/server";
// リダイレクト情報を含むJSONファイルをインポート
import redirects from "@/app/redirects/redirects.json";

// リダイレクトエントリの型定義
type RedirectEntry = {
  destination: string;
  permanent: boolean;
};

// GETリクエストを処理する関数
export function GET(request: NextRequest) {
  // パス名を取得
  const pathname = request.nextUrl.searchParams.get("pathname");

  // パス名が存在しない場合は、400 Bad Requestを返す
  if (!pathname) {
    return new Response("Bad Request", { status: 400 });
  }

  // redirects.jsonファイルからリダイレクトエントリを取得
  const redirect = (redirects as Record<string, RedirectEntry>)[pathname];

  // リダイレクトエントリが存在しない場合は、400 Bad Requestを返す
  if (!redirect) {
    return new Response("No redirect", { status: 400 });
  }

  // リダイレクトエントリをJSON形式で返す
  return NextResponse.json(redirect);
}
