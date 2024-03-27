'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { permanentRedirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function createPost(id: string) {
    try {
      // データベース呼び出し
    } catch (error) {
      // エラー処理
    }
  
    revalidatePath('/posts') // キャッシュされた投稿を更新
    redirect(`/post/${id}`) // 新しい投稿ページにナビゲート
  }

export async function updateUsername(username: string, formData: FormData) {
  try {
    // データベース呼び出し
  } catch (error) {
    // エラー処理
  }

  revalidateTag('username') // ユーザーネームのすべての参照を更新
  permanentRedirect(`/profile/${username}`) // 新しいユーザープロファイルにナビゲート
}
