"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createPost(id: string) {
  try {
    // データベースを呼び出す
  } catch (error) {
    // エラーを処理する
  }

  // キャッシュされた投稿を更新する
  revalidatePath("/posts");
  // 新しい投稿ページに移動する
  redirect(`/post/${id}`);
}
