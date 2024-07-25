'use server';

import { auth, signOut } from '@/auth';
import axios from 'axios';
import { cookies } from 'next/headers';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  headers: {
    // 'Content-Type': 'application/json',
    accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await auth();
    // const cookie = cookies().get('access_token')?.value;
    const locale = cookies().get('NEXT_LOCALE')?.value;

    config.headers['Accept-Language'] = locale === 'ar' ? 'ar' : 'en';

    if (!!session) {
      config.headers.Authorization = `Bearer ${session?.access_token}`;
      return config;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (
//       (error?.response?.status === 403 || error?.response?.status === 401) &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;

//       // await signOut();

//       // cookies().set('cookie', 'cookie-text');
//       // will logged out the user and redirect to homepage
//       // await removeCookies();

//       // window.location.reload();

//       // const access_token = await refreshTokenAction();
//       // axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
//       return axiosInstance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
