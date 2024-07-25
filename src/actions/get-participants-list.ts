'use server';

import axiosInstance from '@/lib/axios-instance';

interface Response {
  data: {
    value: number;
    label: string;
  }[];
}

export const getParticipantsListAction = async () => {
  const response = await axiosInstance.get<Response>('/voting/participants');
  return response.data;
};
