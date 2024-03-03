"use server";

import { permanentRedirect } from "next/navigation";
import { revalidateTag } from "next/cache";

export async function updateUsername(username: string, formData: FormData) {
  try {
    // データベースを呼び出す
  } catch (error) {
    // エラーを処理する
  }

  // ユーザー名へのすべての参照を更新する
  revalidateTag("username");
  // 新しいユーザープロファイルに移動する
  permanentRedirect(`/profile/${username}`);
}
