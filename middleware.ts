export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/middleware/:path*', '/api/middleware'],
};
