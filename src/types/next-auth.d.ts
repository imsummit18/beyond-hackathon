import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    access_token: string;
    refresh_token: string;
    id: number;
    email: string;
    name: string;
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
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: number;
      email: string;
      name: string;
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

    }
    access_token: string;
    refresh_token: string;

  }
}
