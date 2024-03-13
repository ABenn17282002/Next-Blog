// Dynamic Functions:[Cookies]
// next/headersからcookies関数を取得
import { cookies } from "next/headers";

// GET関数の定義
export async function GET(request: Request) {
  // cokieの取得
  const cookieStore = cookies();
  // cookieStoreよりtoken取得
  const token = cookieStore.get("token");

  // 'token'が'undefined'でないことを確認し、その後で'value'プロパティにアクセス
  const tokenValue = token ? token.value : "";
  // レスポンスを生成して返す
  return new Response("Hello, Next.js!", {
    status: 200,
    // レスポンスヘッダーにトークンを設定する
    headers: { "Set-Cookie": `token=${tokenValue}` },
  });
}
