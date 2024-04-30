// v5 one line:
export { auth as middleware } from 'auth';

// from official next.js page:
// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';

// export default NextAuth(authConfig).auth;

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };

//////
// old below
////
// // with out a defined matcher; this one line applies next-auth to the entire project:
// // export { default } from 'next-auth/middleware';

// // https://next-auth.js.org/configuration/nextjs#advanced-usage

// // v4
// import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
// // import {type }
// export default withAuth(
//   // withAuth augments our 'Request' with the user's token;
//   function middleware(request: NextRequestWithAuth) {
//     console.log(request.nextUrl.pathname);
//     console.log(request.nextauth.token);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token?.role === 'admin',
//     },
//   },
// );

// //   callbacks: {
// //     authorized: async ({ req, token }) => {
// //       if (req.nextUrl.pathname.startsWith("/admin")) return token?.role === "admin";
// //       return !!token;
// //     },
// //   },
// // });

// // export const config = { matcher: ['/admin:path*', '/profile'] };
// export const config = { matcher: ['/extra', '/dashboard'] };
