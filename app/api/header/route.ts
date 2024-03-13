// Dynamic Functions:[Headers]
import { headers } from "next/headers";

export async function GET(request: Request) {
  const headersList = headers();
  const referer = headersList.get("referer");

  // null の場合は undefined に変換する
  const refererHeaderValue = referer !== null ? referer : undefined;

  const headersInit: HeadersInit = {};
  if (refererHeaderValue !== undefined) {
    headersInit.referer = refererHeaderValue;
  }

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: headersInit,
  });
}
