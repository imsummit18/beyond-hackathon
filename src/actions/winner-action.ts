'use server';

import axiosInstance from '@/lib/axios-instance';

export interface Response {
  data: WinnersType[];
}

export type WinMemberType = {
  id: number;
  name: string;
  email: string;
  phone: number;
  country: string;
  nationality: string;
}

export type WinnerType = {
  id: number;
  title: string;
  winners: {
    id: number;
    participant: {
      id: number;
      uuid: string;
      national: string;
      name: string;
      members: WinMemberType[];
    };
  }[]
}


export type WinnersType = {
  id: number;
  name: string;
  winner: WinnerType[];
};

export const winnerAction = async () => {
  // try {
  const response = await axiosInstance.get<Response>('https://beyonddemo.ourdemo.online/api/v1/winner');

  return response.data;
  // } catch (err: any) {
  //   return {
  //     success: false,
  //     message: errorMsgHandler(err),
  //   };
  // }
};
