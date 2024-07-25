'use server';

import { signOut } from '@/auth';
import axiosInstance from '@/lib/axios-instance';
import errorMsgHandler from '@/lib/error-msg-handler';
import initTranslations from '@/lib/i18n';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

function isRedirectError(error: Error & { digest?: string }) {
  return !!error.digest?.startsWith('NEXT_REDIRECT');
}

interface Response {
  data: {
    access_token: string;
    refresh_token: string;
  };
  message: string;
}

export const logoutAction = async () => {
  try {
    // const response = await axiosInstance.post<Response>('/auth/logout');
    await signOut({
      redirectTo: '/',
    });

    // cookies().delete('access_token');
    // cookies().delete('refresh_token');

    revalidatePath('/');

    return {
      success: true,
      // message: response.data?.message,
      message: 'participant:Logged_out_successfully',
      // data: response.data,
    };
  } catch (err: any) {
    // console.log('🚀 ~ logoutAction ~ err:', err);
    if (isRedirectError(err)) {
      return {
        success: true,
        message: 'participant:Logged_out_successfully',
      };
    }
    return {
      success: false,
      message: errorMsgHandler(err),
    };
  }
};
