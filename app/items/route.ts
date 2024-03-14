// Revalidating Cached Data
export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";

// GETメソッド
export async function GET() {
  //データの取得
  const res = await fetch("https://data.mongodb-api.com/...", {
    // 60秒ごとに再検証
    next: { revalidate: 60 },
  });
  // レスポンをJSON形式に変換します
  const data = await res.json();

  return Response.json(data);
}

// POSTメソッド
export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  return Response.json({ name, email });
}
