import Connect from '@/lib/mongodb/connect';
import clientPromise from '@/lib/mongodb/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET,
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.MONGO_DB_NAME,
  }),
  database: process.env.MONGO_DB_URI,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  events: {
    // this function is called when it is the first time the user signs in
    createUser: async ({ user }) => {
      // update the database e.g. with paymet information from stripe...
      const collection = await Connect('users');

      // add stripe customer id to database
      await collection.updateOne(
        { email: user.email },
        { $set: { paymentId: 'paymentId' } }
      );
    },
  },
  session: { strategy: 'jwt' }, // use the jwt strategy to secure the pages with middleware
  callbacks: {
    async jwt({ token, user }) {
      // use this method to set the user id (workaround) when using useSession
      // Initialize the token with the default values
      if (user) {
        // this is neccessary because first time for example the paymentId is not in the user object.
        // so we have to make a manually call to the database
        const collection = await Connect('users');
        const updatedUser = await collection.findOne({ email: user.email });

        if (updatedUser) {
          token.id = updatedUser.id;
          token.paymentId = updatedUser.paymentId;
          //
          console.log(updatedUser);
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.paymentId = token.paymentId as string;
      return session;
    },
  },
};
