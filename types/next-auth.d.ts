import { ObjectId } from 'mongodb';
import 'next-auth';

// Extend the existing Session type with the 'id' property
declare module 'next-auth' {
  interface Session {
    user: User;
    expires: string;
    access_token?: string;
    error?: string;
  }
  interface User {
    id: string | ObjectId;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {}
}
