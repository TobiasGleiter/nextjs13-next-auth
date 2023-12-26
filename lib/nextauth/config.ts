function getDomain() {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3000';
  if (process.env.NODE_ENV === 'production')
    return 'https://nextjs13-next-auth.vercel.app';
}

function getSecure() {
  if (process.env.NODE_ENV === 'development') return false;
  if (process.env.NODE_ENV === 'production') return true;
}

function getHttpOnly() {
  if (process.env.NODE_ENV === 'development') return false;
  if (process.env.NODE_ENV === 'production') return true;
}

export const DOMAIN = getDomain();
export const SECURE = getSecure();
export const HTTP_ONLY = getHttpOnly();
