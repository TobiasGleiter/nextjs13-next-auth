import { ObjectId } from 'mongodb';
import 'next-auth';

// Extend the existing Session type with the 'id' property
declare module 'next-auth' {
  interface Session {
    user: {
      id: string | ObjectId;
      name: string;
      image: string;
      email: string;
      role: string;
    };
    expires: string;
  }
  interface User {
    id: string | ObjectId;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role: string;
  }
}
