import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

const { auth } = NextAuth(authConfig);

export default auth((request) => {
  const { nextUrl } = request;

  const isAuthenticated = !!request.auth;

  /**
   * if we try to access home or protected page after login
   * then will redirect to login page
   */
  if (request.nextUrl.pathname === '/participant/details' && !isAuthenticated) {
    const loginUrl = new URL('/', request.url);

    // Perform the redirection using i18nRouter
    const response = i18nRouter(request, i18nConfig);

    // Set the redirection URL
    response.headers.set('Location', loginUrl.toString());
    return NextResponse.redirect(loginUrl);
  }

  return i18nRouter(request, i18nConfig);
});

// export function middleware(request: NextRequest) {
//   // console.log('request------', request);
//   const cookie = request.cookies.get('access_token');

//   /**
//    * if we try to access home or protected page after login
//    * then will redirect to login page
//    */
//   if (request.nextUrl.pathname === '/participant/details' && !cookie) {
//     const loginUrl = new URL('/', request.url);

//     // Perform the redirection using i18nRouter
//     const response = i18nRouter(request, i18nConfig);

//     // Set the redirection URL
//     response.headers.set('Location', loginUrl.toString());
//     // return response;
//     return NextResponse.redirect(loginUrl);
//   }

//   return i18nRouter(request, i18nConfig);
// }

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|forgot-password|reset-password).*)',
  ],
};
