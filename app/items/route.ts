// Revalidating Cached Data

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
