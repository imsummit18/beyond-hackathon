'use server';

import axiosInstance from '@/lib/axios-instance';

export interface Response {
  data: {
    id: number;
    question: string;
    answer: string;
  }[];
}

export const faqAction = async ({ search }: { search: string }) => {
  // try {
  const response = await axiosInstance.get<Response>('/faq', {
    params: { search },
  });

  return response.data;
  // } catch (err: any) {
  //   return {
  //     success: false,
  //     message: errorMsgHandler(err),
  //   };
  // }
};
