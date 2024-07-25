'use server';

import axiosInstance from '@/lib/axios-instance';
import errorMsgHandler from '@/lib/error-msg-handler';

interface Response {
  message: string;
}

export const registerAction = async (body: any) => {
  try {
    const response = await axiosInstance.post<Response>('/auth/register', body);

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
