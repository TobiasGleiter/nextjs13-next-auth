import clientPromise from '@/lib/mongodb/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.MONGO_DB_NAME,
  }),
  database: process.env.MONGO_DB_URI,
  providers: [
    GithubProvider({
      profile(profile) {
        console.log('Some Stripe');
        return {
          role: 'guest',
          id: profile.id.toString(),
          name: profile.name,
          image: profile.avatar_url,
          email: profile.email,
          location: profile.location,
          emailVerified: profile.emailVerified,
        };
      },
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
  events: {},
  session: { strategy: 'jwt' }, // use the jwt strategy to secure the pages with middleware
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};
