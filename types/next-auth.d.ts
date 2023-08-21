import { ObjectId } from 'mongodb';
import 'next-auth';

// Extend the existing Session type with the 'id' property
declare module 'next-auth' {
  interface Session {
    user: {
      id?: string | ObjectId;
      name: string;
      image: string;
      email: string;
      paymentId: string;
    };
  }
  interface User {
    paymentId: string; // Assuming this is the MongoDB user ID
    // Add other custom properties here
  }
}
