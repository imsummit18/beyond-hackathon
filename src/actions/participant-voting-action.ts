'use server';

import axiosInstance from '@/lib/axios-instance';
import errorMsgHandler from '@/lib/error-msg-handler';

interface Response {
  message: string;
}
// export const participantVotingAction = async (body: FormData) => {
export const participantVotingAction = async (body: {
  competition_id: number;
  user_voting_id: number;
  voting: {
    participant_id: number;
    score: number;
  }[];
}) => {
  try {
    const response = await axiosInstance.post<Response>('/voting/voting', body);

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
