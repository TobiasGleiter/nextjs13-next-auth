import { withAuth } from 'next-auth/middleware';

// export async function middleware(request: NextRequestWithAuth) {
//   console.log('Middleware executing!');

//   const token =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTYzMjYwMTE3ZDgwOWI0ZTA3MDQ0ZTMiLCJpYXQiOjE3MDM1NzA0MDQsImV4cCI6MTcwMzU3NDAwNH0.MonUQIt_8b5LUj50Kbto7Wr3BaUaDz60JGx0IY_s_f4';

//   // Prepare the CSP headers
//   const requestHeaders = new Headers(request.headers);
//   //console.log(requestHeaders);
//   requestHeaders.set('Authorization', `Bearer ${token}`);

//   // Execute the NextAuth middleware which either returns a redirect response or nothing, if authentication
//   // was not required. See source for more: https://github.com/nextauthjs/next-auth/blob/v4/packages/next-auth/src/next/middleware.ts#L99
//   // If a redirect was returned, use it. Otherwise continue the response normally with NextResponse.next().
//   // Omitting the config here, but you can still include it (i.e withAuth(request, { pages: ... }))
//   const response = (await withAuth(request)) || NextResponse.next();

//   // Set the CSP headers on the response
//   requestHeaders.forEach((value, key) => {
//     response.headers.append(key, value);
//   });

//   console.log('Middleware executed!');
//   console.log(requestHeaders);

//   return response;
// }

// export default withAuth(
//   //`withAuth` augments your `Request` with the user's token.
//   async function middleware(request: NextRequest) {
//     let cookie = request.cookies.get('next-auth.session-token');
//     //console.log(cookie.value);

//     const requestHeaders = new Headers(request.headers);
//     requestHeaders.set('x-hello-from-middleware1', 'hello');

//     // You can also set request headers in NextResponse.rewrite
//     const response = NextResponse.next({
//       request: {
//         // New request headers
//         headers: requestHeaders,
//       },
//     });

//     // Set a new response header `x-hello-from-middleware2`
//     response.headers.set('x-hello-from-middleware2', 'hello');
//     return response;
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }
// );

export default withAuth(
  //`withAuth` augments your `Request` with the user's token.
  // async function middleware(request: NextRequest) {
  //   console.log('Starting middleware');
  //   let sessionToken = request.cookies.get('next-auth.session-token');
  //   if (sessionToken) {
  //     request.cookies.delete('Session-Token', sessionToken.value);
  //     return;
  //   }
  //   //console.log(cookie.value);

  //   const response = NextResponse.next();
  //   response.cookies.set({
  //     name: 'access_token',
  //     value: 'token1234',
  //     httpOnly: true,
  //     secure: true,
  //   });
  //   const cookie = response.cookies.get('token');
  //   //console.log(cookie);

  //   console.log('Middleware executed');

  //   return response;
  // },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    '/middleware/:path*',
    '/middleware/data',
    '/api/middleware',
    '/task/:path*',
  ],
};
