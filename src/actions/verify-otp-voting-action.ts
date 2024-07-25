'use server';

import axiosInstance from '@/lib/axios-instance';
import errorMsgHandler from '@/lib/error-msg-handler';

interface Response {
  message: string;
  data: {
    id: number;
    email: string;
  };
}

export const verifyOtpVotingAction = async (body: {
  email: string;
  otp: string;
}) => {
  try {
    const response = await axiosInstance.post<Response>('/voting/otp', body);

    return {
      success: true,
      message: response.data?.message,
      data: response.data.data.id,
    };
  } catch (err: any) {
    return {
      success: false,
      message: errorMsgHandler(err),
    };
  }
};
