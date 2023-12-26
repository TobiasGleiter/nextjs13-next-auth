import clientPromise from '@/lib/mongodb/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { JwtPayload, decode, sign } from 'jsonwebtoken';
import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

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
        //console.log('Some Stripe');
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
    GoogleProvider({
      profile(profile) {
        return {
          role: 'guest',
          id: profile.sub.toString(),
          name: profile.name,
          image: profile.picture,
          email: profile.email,
          location: profile.locale,
          emailVerified: profile.email_verified,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
  // cookies: {
  //   sessionToken: {
  //     name: `next-auth.session-token`,
  //     options: {
  //       //httpOnly: HTTP_ONLY,
  //       //domain: DOMAIN,
  //       //secure: SECURE,
  //     },
  //   },
  //   // callbackUrl: {
  //   //   name: `next-auth.callback-url`,
  //   //   options: {},
  //   // },
  //   // csrfToken: {
  //   //   name: 'next-auth.csrf-token',
  //   //   options: {},
  //   // },
  // },
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      // create access_token
      if (account && user) {
        token.id = user.id;
        token.role = user.role;
        token.access_token = generateAccessToken(user);
        console.log(token.access_token);
      }

      // check if token.access_token.expires_at
      // else refresh token
      // const currentTime = Math.floor(Date.now() / 1000);
      // if (token.access_token) {
      //   const decodedToken: JWT = decodeToken(token.access_token);
      //   if (currentTime >= decodedToken.exp) {
      //     console.log('Token has expired.');
      //     // have to be an new token and refresh token
      //     token.access_token = generateAccessToken(token);
      //   } else {
      //     console.log('Token is still valid.');
      //   }
      // }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        //session.access_token = token.access_token as string;
      }

      return session;
    },
  },
};

const generateAccessToken = (user: any) => {
  // Define the payload to be included in the token
  const payload = {
    // Add necessary user data to the payload (e.g., user ID, role, etc.)
    userId: user.id,
    // Add other relevant user data...
  };

  // Define token options (e.g., expiration time)
  const options = {
    expiresIn: '60m', // Set the token expiration time (e.g., 1 hour)
  };

  // Generate the access token using the payload, secret key, and options
  const accessToken = sign(payload, process.env.JWT_SECRET as string, options);
  return accessToken;
};

const decodeToken = (token: any): JWT => {
  // Verify and decode the token using the secret key
  const decodedToken = decode(token) as JwtPayload;
  //console.log('token: ', decodedToken);
  return decodedToken;
};
