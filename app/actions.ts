'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { permanentRedirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function createPost(id: string) {
    try {
      // �f�[�^�x�[�X�Ăяo��
    } catch (error) {
      // �G���[����
    }
  
    revalidatePath('/posts') // �L���b�V�����ꂽ���e���X�V
    redirect(`/post/${id}`) // �V�������e�y�[�W�Ƀi�r�Q�[�g
  }

export async function updateUsername(username: string, formData: FormData) {
  try {
    // �f�[�^�x�[�X�Ăяo��
  } catch (error) {
    // �G���[����
  }

  revalidateTag('username') // ���[�U�[�l�[���̂��ׂĂ̎Q�Ƃ��X�V
  permanentRedirect(`/profile/${username}`) // �V�������[�U�[�v���t�@�C���Ƀi�r�Q�[�g
}
