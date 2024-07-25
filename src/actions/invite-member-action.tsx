'use server';

import axiosInstance from '@/lib/axios-instance';

interface Response {
    message?: string;
    data?: {
        email: string;

    };
}

export const inviteTeamMember = async (body: {
    email: string;
}) => {
    try {
        const response = await axiosInstance.post<Response>('/participant/invite-member', body);
        return {
            success: true,
            message: response.data?.message,
        };
    } catch (err: any) {
        return {
            success: false,
            message: "Please try again",
        };
    }
};
