export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug; // 'a', 'b', or 'c'

  // slug仮条件(a,b,cのみ)
  switch (slug) {
    case "a":
      // 'a' の場合の処理
      return new Response("Item A", { status: 200 });
    case "b":
      // 'b' の場合の処理
      return new Response("Item B", { status: 200 });
    case "c":
      // 'c' の場合の処理
      return new Response("Item C", { status: 200 });
    default:
      // それ以外の値の場合は、404 エラーを返す
      return new Response("Not Found", { status: 404 });
  }
}
