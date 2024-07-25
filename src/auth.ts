import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import axiosInstance from './lib/axios-instance';
import errorMsgHandler from './lib/error-msg-handler';

interface Response {
  data: {
    access_token: string;
    refresh_token: string;
    id: number;
    name: string;
    email: string;
    user_type?: string;
    team_member_details?: {
      id: number;
      name: string;
      email: string;
      phone: string;
      country: string;
      country_other: string;
      city: string | null;
      city_other: string | null;
      nationality: string;
    }[] | undefined;
  };
  message: string;
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      // @ts-ignore
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) return null;

        try {
          const user = await axiosInstance.post<Response>('/auth/login', {
            email: credentials.email,
            password: credentials.password,
          });

          const { id, access_token, user_type, team_member_details, email, name, refresh_token } =
            user.data.data;
          52;
          const userData = {
            id,
            email,
            name,
            user_type,
            team_member_details
          };

          return {
            user: userData,
            access_token,
            refresh_token,
          };
        } catch (err) {
          throw new Error(errorMsgHandler(err));
        }
      },
    }),
  ],
  callbacks: {


    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }

      // try {
      //   await axiosInstance.get<Response>('/participant/info');
      //   return token;
      // } catch (err: any) {
      //   return null;
      //   // console.log('err', err.response);
      //   // if (err.response.status === 401) {
      //   //   await signOut();
      //   // }
      //   // throw new Error('Something went wrong');
      // }

      return token;
      // if (Date.now() < token.accessTokenExpiresIn) {
      //   return token;
      // }
      // console.log('refreshing token-----');
      // return await refreshToken(token);
    },
    async session({ token, session }) {
      session.refresh_token = token.refresh_token;
      session.access_token = token.access_token;
      session.id = token.user.id;
      session.name = token.user.name;
      session.email = token.user.email;
      session.user_type = token.user.user_type;
      session.team_member_details = token.user.team_member_details;
      return session;
    },
  },
});
