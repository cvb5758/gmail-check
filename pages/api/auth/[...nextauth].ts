import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextApiHandler } from 'next';

const authHandler: NextApiHandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account && account.provider === 'google') {
        return true;
      }
      return false;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
});

export default authHandler;
