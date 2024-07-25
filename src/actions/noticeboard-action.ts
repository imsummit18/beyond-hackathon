'use server';

import axiosInstance from '@/lib/axios-instance';
import errorMsgHandler from '@/lib/error-msg-handler';

export interface Response {
    data: {
        id: number,
        title: string,
        description: string
    }[];
}

export const noticeBoardAction = async () => {
    // try {
    const response = await axiosInstance.get<Response>('/notice');

    return response.data;
    // } catch (err: any) {
    //   return {
    //     success: false,
    //     message: errorMsgHandler(err),
    //   };
    // }
};
