import 'next-auth';

// Extend the existing Session type with the 'id' property
declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      name: string;
      image: string;
      email: string;
    };
  }
}
