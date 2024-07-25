'use server';

import axiosInstance from '@/lib/axios-instance';
import errorMsgHandler from '@/lib/error-msg-handler';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

interface Response {
  message: string;
}

export const refreshTokenAction = async () => {
  try {
    const refresh_token = cookies().get('refresh_token')?.value;

    const response = await axiosInstance.post<Response>(
      '/auth/refresh-token',
      '',
      {
        headers: {
          Authorization: `Bearer ${refresh_token}`,
        },
      }
    );

    return {
      success: true,
      message: response.data?.message,
      data: response.data,
    };
  } catch (err: any) {
    return {
      success: false,
      message: errorMsgHandler(err),
    };
  }
};

export const removeCookies = async () => {
  const response = await fetch('http://localhost:3000/api/cookies', {
    headers: {
      Accept: 'application/json',
      method: 'GET',
    },
  });
  const res = await response.json();
  // console.log('response', res);

  // if()

  // cookies().delete('access_token');
  // cookies().delete('refresh_token');
  revalidatePath('/');
};
