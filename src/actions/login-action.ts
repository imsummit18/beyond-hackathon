'use server';

import { signIn } from '@/auth';
import axiosInstance from '@/lib/axios-instance';
import errorMsgHandler from '@/lib/error-msg-handler';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

function isRedirectError(error: Error & { digest?: string }) {
  return !!error.digest?.startsWith('NEXT_REDIRECT');
}

export const loginAction = async (body: {
  email: string;
  password: string;
}) => {
  try {
    await signIn('credentials', {
      ...body,
      redirectTo: '/participant/details',
    });
    // const response = await axiosInstance.post<Response>('/auth/login', body);

    // cookies().set('access_token', response.data.data.access_token);
    // cookies().set('refresh_token', response.data.data.refresh_token);

    revalidatePath('/participant/details');

    return {
      success: true,
      message: 'Logged_in_successfully',
      // message: response.data?.message,
      // data: response.data,
    };
  } catch (err: any) {
    if (isRedirectError(err)) {
      return {
        success: true,
        message: 'Logged_in_successfully',
      };
    }

    if (err instanceof AuthError) {
      const { type, cause } = err as AuthError;
      switch (type) {
        case 'CredentialsSignin':
          return {
            success: false,
            message: 'Invalid_credentials',
          };
        case 'CallbackRouteError':
          return {
            success: false,
            message: cause?.err?.toString(),
          };
        default:
          return {
            success: false,
            message: 'Something_went_wrong',
          };
      }
    }
    return {
      success: false,
      message: 'Something_went_wrong',
    };
  }
};
