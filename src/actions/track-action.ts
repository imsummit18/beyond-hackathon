'use server';

import axiosInstance from '@/lib/axios-instance';

export interface Response {
   data: {
      id: string;
      value: string;
      name: string;
   }[];
}


export const trackAction = async () => {
   const response = await axiosInstance.get<Response>('/track');
   return response.data;
};
